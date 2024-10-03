const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const api = supertest(app);
const Comments = require("../models/commentModels");

beforeAll(async () => {
    user = {
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
    const result = await api
    .post("/api/users")
    .send
});

describe("Comment API", function () {
    beforeEach(async () => {
        await Comments.deleteMany({});
        const comment = {
            "commentID": "21903DKSAKJ",
            "userID": "9138249iISDAJFDKA",
            "rating": 3.5,
            "comment": "Shit product.",
            "date": "04.01.1994",
        }

        const result = await api
            .post("/api/comments")
            .send(comment)
    })

    describe("GET /comments", () => {
        it('should return all comments', async () => {
            await api
                .get("/api/comments")
                .expect(200)
                .expect("Content-Type", /application\/json/);
        });
    });
})