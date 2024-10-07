const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../../app");
const api = supertest(app);
const Orders = require("../../Models/orderModel");
const User = require("../../Models/userModel");
const Product = require("../../Models/productModel");

const UserMocks = require("../MockData/MOCK_DATA_USER.json");
const ProductMocks = require("../MockData/MOCK_DATA_PRODUCT.json");
const OrderMocks = require("../MockData/MOCK_DATA_ORDER.json");

beforeAll(async () => {
  await User.deleteMany({});
  await Product.deleteMany({});
  await Orders.deleteMany({});
  await User.insertMany(UserMocks);
  await Product.insertMany(ProductMocks);
  await Orders.insertMany(OrderMocks);
});

describe("Orders API", function () {
  describe("GET /orders", function () {
    describe("when fetching all orders", function () {
      it("should return all orders", async function () {
        const response = await api.get("/api/orders").expect(200);
        expect(response.body).toHaveLength(OrderMocks.length);
      });

      it("should return orders in JSON format", async function () {
        await api
          .get("/api/orders")
          .expect(200)
          .expect("Content-Type", /application\/json/);
      });
    });
  });

  describe("GET /orders/:orderID", function () {
    describe("when fetching a specific order", function () {
      it("should return an order by its ID", async function () {
        const orderToFind = await Orders.findOne({});
        const response = await api
          .get(`/api/orders/${orderToFind._id}`)
          .expect(200);
        expect(response.body).toEqual(JSON.parse(JSON.stringify(orderToFind)));
      });

      it("should return 404 if the order is not found", async function () {
        const invalidID = "6702437e3a61345c7ea50e02";
        await api.get(`/api/orders/${invalidID}`).expect(404);
      });

      it("should return 400 if the orderID is invalid", async function () {
        const invalidID = "invalidID";
        await api.get(`/api/orders/${invalidID}`).expect(400);
      });
    });
  });

  describe("POST /orders", function () {
    beforeAll(() => {
      Orders.deleteMany({});
    });
    describe("when an order was made", function () {
      it("should create a new order and return 201 status", async function () {
        const orderToAdd = OrderMocks[0];
        const user = await User.findOne({}).select("_id");
        const product = await Product.findOne({}).select("_id");

        orderToAdd.userID = user._id;
        orderToAdd.productID = product._id;

        const response = await api
          .post(`/api/orders`)
          .send(orderToAdd)
          .expect(201);
        expect(response.body.userID).toContain(orderToAdd.userID.toString());
        expect(response.body.productID).toContain(
          orderToAdd.productID.toString()
        );
      });

      it("should return 400 if required fields are missing", async function () {
        const orderToAdd = { quantity: 2 }; // Missing userID and productID
        await api.post(`/api/orders`).send(orderToAdd).expect(400);
      });
    });
  });

  describe("PUT /orders/:orderID", function () {
    describe("when updating an order", function () {
      it("should update an existing order and return the updated order", async function () {
        const orderToModify = await Orders.findOne();
        const edit = { quantity: 5 };
        const response = await api
          .put(`/api/orders/${orderToModify._id}`)
          .send(edit)
          .expect(200);
        expect(response.body.quantity).toEqual(5);
      });

      it("should return 404 if the order is not found", async function () {
        const invalidID = "6702437e3a61345c7ea50e02";
        await api.put(`/api/orders/${invalidID}`).expect(404);
      });
    });
  });

  describe("DELETE /orders/:orderID", function () {
    describe("when deleting an order", function () {
      it("should delete an order and return a success message", async function () {
        const initialOrders = await Orders.find({});
        const initialCount = initialOrders.length;
        const orderToDelete = initialOrders[0];

        await api.delete(`/api/orders/${orderToDelete._id}`).expect(200);

        const remainingOrders = await Orders.find({});
        const finalCount = remainingOrders.length;

        expect(finalCount).toBe(initialCount - 1);

        const deletedOrder = await Orders.findById(orderToDelete._id);
        expect(deletedOrder).toBeNull();
      });

      it("should return 404 if the order is not found", async function () {
        const invalidID = "6702437e3a61345c7ea50e02";
        await api.delete(`/api/orders/${invalidID}`).expect(404);
      });
    });
  });
});

afterAll(async () => {
  await User.deleteMany({});
  await Product.deleteMany({});
  await Orders.deleteMany({});
});
