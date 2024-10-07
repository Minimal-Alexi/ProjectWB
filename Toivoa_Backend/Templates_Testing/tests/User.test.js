const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../../app");
const api = supertest(app);
const User = require("../../Models/userModel");

const UserMocks = require("../MockData/MOCK_DATA_USER.json");
const { createToken } = require("../../Middleware/jwtHandling");

beforeAll(async () => {
    await User.deleteMany({});
}
)

describe("User API", function () {
    describe("GET /api/users", function () {
        describe("when fetching all users", function () {
            beforeAll(async () => {
                await User.insertMany(UserMocks);
            })
            it("should return all existing users", async function () {
                const response = await api.get("/api/users");
                expect(response.body).toHaveLength(UserMocks.length);
            });

            it("should include a specific user in the returned list", async function () {
                const response = await api.get("/api/users");
                const usernames = response.body.map((user) => user.username);
                expect(usernames).toContain("nfeldberg1"); // Replace with actual username from UserMocks
            });

            it("should return users in JSON format", async function () {
                await api
                    .get("/api/users")
                    .expect(200)
                    .expect("Content-Type", /application\/json/);
            });
        });
        describe("when fetching one specific user", function () {
            it("should return an existing user", async function () {
                const usertoFind = await User.findOne({ username: UserMocks[0].username });
                const response = await api.get(`/api/users/${usertoFind._id}`)
                    .expect(200)
                const id = response.body._id
                expect(id).toContain(usertoFind._id.toString());
            })
            it("shouldn't return a user if the ID is bad", async function () {
                const fakeUserID = "507f191e810c19729de860ea";
                await api.get(`/api/users/${fakeUserID}`)
                    .expect(404)
            })
        })
    });
    describe("POST /api/users", function () {
        describe("when registering a new account", function () {
            beforeAll(async () => {
                await User.deleteMany({});
            })
            it("should succesfully register a new user.", async function () {
                const newUser = UserMocks[0];
                const response = await api
                    .post("/api/users")
                    .send(newUser)
                    .expect(201)
                    .expect("Content-Type", /application\/json/)
                expect(response.body).toHaveProperty("token");
            })
            it("shouldn't be able to register the a user with the same credentials.", async function () {
                const newUser = UserMocks[0];

                await api
                    .post("/api/users")
                    .send(newUser)
                    .expect(400)
            })
            it("shouldn't register a badly formatted user", async function () {
                const fakeUser =
                {
                    username: "I am a bozo"
                }

                await api
                    .post("/api/users")
                    .send(fakeUser)
                    .expect(400)
            })
        })
        describe("when logging into an account", function () {
            it("should be able to login with proper credentials.", async function () {
                const userToLog = {
                    email: UserMocks[0].email,
                    password: UserMocks[0].password
                }

                await api
                    .post("/api/users/login")
                    .send(userToLog)
                    .expect(200)
            })
            it("shouldn't be able to login with wrong credentials.", async function () {
                const userToLog = {
                    email: UserMocks[0].email,
                    password: "badpass"
                }

                await api
                    .post("/api/users/login")
                    .send(userToLog)
                    .expect(400)
            })

        })
        describe("when updating an account", function () {
            let token;
            beforeAll(async () => {
                const user = await User.findOne({ username: UserMocks[0].username });
                token = createToken(user);
            })
            it("should be able to update an account.", async function () {
                const userToEdit = await User.findOne({ username: UserMocks[0].username });
                const editedSettings = {
                    username: "Banana"
                };

                const response = await api
                    .put(`/api/users/${userToEdit._id}`)
                    .set("Authorization", `Bearer ${token}`)  // Set JWT token
                    .send(editedSettings)
                    .expect(200);

                expect(response.body.username).toContain("Banana");
            });

            it("shouldn't update with the wrong fields.", async function () {
                const userToEdit = await User.findOne({ username: "Banana" });
                const editedSettings = {
                    badfield: "lol"
                };

                const response = await api
                    .put(`/api/users/${userToEdit._id}`)
                    .set("Authorization", `Bearer ${token}`)  // Set JWT token
                    .send(editedSettings)
                    .expect(200);

                expect(response.body).not.toHaveProperty("badfield");
            });
        })
        describe("delete an account", function () {
            beforeAll(async () => {
                const user = await User.findOne({ username: UserMocks[0].username });
                token = createToken(user);
            })
            it("should be able to delete an account", async function () {
                const userToDelete = await User.findOne();
                await api
                    .delete(`/api/users/${userToDelete._id}`)
                    .set("Authorization", `Bearer ${token}`)  // Set JWT token
                    .expect(200);
            });

            it("should throw an error if the account isn't found.", async function () {
                await api
                    .delete(`/api/users/670225f3e9f9dc2ef07da54c`)
                    .set("Authorization", `Bearer ${token}`)  // Set JWT token
                    .expect(404);
            });
        })
        afterAll(async () => {
            await User.deleteMany({});
        })

    })
})