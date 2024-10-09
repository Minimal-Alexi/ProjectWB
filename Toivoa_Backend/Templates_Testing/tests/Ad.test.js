const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../../app");
const api = supertest(app);
const User = require("../../Models/userModel");
const Ads = require("../../Models/adModel");

const UserMocks = require("../MockData/MOCK_DATA_USER.json");
const AdMocks = require("../MockData/MOCK_DATA_AD.json");
const {createToken} = require("../../Middleware/jwtHandling")

let token;

beforeAll(async () => {
  await User.deleteMany({});
  await Ads.deleteMany({});
  await User.insertMany(UserMocks);
  await Ads.insertMany(AdMocks);
});

beforeAll(async () => {
  const user = await User.findOne({ accountType: 2 });
  token = createToken(user);
})

describe("Ads API", function () {
  describe("GET /ads", function () {
    describe("when fetching all ads", function () {
      it("should return all ads", async function () {
        const response = await api.get("/api/ads")
        .set("Authorization", `Bearer ${token}`);
        expect(response.body).toHaveLength(AdMocks.length);
      });

      it("should return ads in JSON format", async function () {
        await api
          .get("/api/ads")
          .expect(200)
          .expect("Content-Type", /application\/json/)
          .set("Authorization", `Bearer ${token}`);;
      });
    });
  });

  describe("GET /ads/:adID", function () {
    describe("when fetching a specific ad", function () {
      it("should return an ad by its ID", async function () {
        const adToFind = await Ads.findOne({});
        const response = await api.get(`/api/ads/${adToFind._id}`).expect(200)
        .set("Authorization", `Bearer ${token}`);;
        expect(response.body).toEqual(JSON.parse(JSON.stringify(adToFind)));
      });

      it("should return 404 if the ad is not found", async function () {
        const invalidID = "6702437e3a61345c7ea50e02";
        await api.get(`/api/ads/${invalidID}`).expect(404)
        .set("Authorization", `Bearer ${token}`);;
      });

      it("should return 400 if the adID is invalid", async function () {
        const invalidID = "invalidID";
        await api.get(`/api/ads/${invalidID}`).expect(400)
        .set("Authorization", `Bearer ${token}`);;
      });
    });
  });

  describe("POST /ads", function () {
    beforeAll(() => {
      Ads.deleteMany({});
    });
    describe("when creating a new ad", function () {
      it("should create a new ad and return 201 status", async function () {
        const adToAdd = AdMocks[0];
        const user = await User.findOne({ accountType: 2 }).select("_id");
        adToAdd.vendorID = user._id;
        const response = await api
        .post(`/api/ads`)
        .send(adToAdd)
        .expect(201)
        .set("Authorization", `Bearer ${token}`);;
        expect(response.body.vendorID).toContain(adToAdd.vendorID.toString());
      });

      it("should return 403 if the user is not a vendor", async function () {
        const adToAdd = AdMocks[0];
        const user = await User.findOne({ accountType: 0 }).select("_id");
        adToAdd.vendorID = user._id;
        await api.post(`/api/ads`).send(adToAdd).expect(403)
        .set("Authorization", `Bearer ${token}`);;
      });
    });
  });

  describe("PUT /ads/:adID", function () {
    describe("when updating an ad", function () {
      it("should update an existing ad and return the updated ad", async function () {
        const adToModify = await Ads.findOne();
        const edit = { pricing: 999 };
        const response = await api
          .put(`/api/ads/${adToModify._id}`)
          .send(edit)
          .expect(200)
          .set("Authorization", `Bearer ${token}`);;
        expect(response.body.pricing).toEqual(999);
      });

      it("should return 404 if the ad is not found", async function () {
        const invalidID = "6702437e3a61345c7ea50e02";
        await api.put(`/api/ads/${invalidID}`).expect(404)
        .set("Authorization", `Bearer ${token}`);;
      });
    });
  });

  describe("DELETE /ads/:adID", function () {
    describe("when deleting an ad", function () {
      it("should delete an ad and return success message", async function () {
        const adToDelete = await Ads.findOne();
        await api
        .delete(`/api/ads/${adToDelete._id}`)
        .expect(200)
        .set("Authorization", `Bearer ${token}`);;
        expect(Ads.find({}.length == 0))
      });

      it("should return 404 if the ad is not found", async function () {
        const invalidID = "6702437e3a61345c7ea50e02";
        await api
        .delete(`/api/ads/${invalidID}`
        ).expect(404)
        .set("Authorization", `Bearer ${token}`);;
      });
    });
  });
});

afterAll(async () => {
  await User.deleteMany({});
  await Ads.deleteMany({});
});
