const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../../app");
const api = supertest(app);
const Users = require("../../Models/userModel");
const Comments = require("../../Models/commentModel");

let userID;
let initialComments;

beforeAll(async () => {
    const user = {
        username: "username",
        email: "email@email.email",
        firstName: "firstName",
        lastName: "lastName",
        password: "Password123!",
        passwordSalt: "abc123",
        accountType: 0,
        countryCode: "00000",
        location: "location",
        phoneNumber: "1234567",
        age: 180,
        gender: "M"
    }
    await Comments.deleteMany({});
    const userObject = new Users(user);
    await userObject.save();
    userID = userObject._id;
});

beforeEach(async () => {
    initialComments =
        [
            {
                userID: userID,
                rating: 3.5,
                comment: "Shit product.",
                date: "04.01.1994",
            },
            {
                userID: userID,
                rating: 4.5,
                comment: "Banger",
                date: "04.01.1994",
            }
        ];



    await Comments.deleteMany({});
    for (let comment of initialComments) {
        const commentObject = new Comments(comment);
        await commentObject.save();
    }
});

describe("Comment API", function () {
    describe("GET /comments", () => {
        it('should return all comments', async () => {
            const response = await api
                .get("/api/comments")
                .expect(200)
                .expect("Content-Type", /application\/json/);
            expect(response.body).toHaveLength(initialComments.length);
        });
    });
})


afterAll(() => {
    Users.findOneAndDelete();
    mongoose.connection.close();
});
