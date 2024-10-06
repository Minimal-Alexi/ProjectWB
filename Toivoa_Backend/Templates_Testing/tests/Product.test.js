const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../../app");
const api = supertest(app);
const User = require("../../Models/userModel");
const Product = require("../../Models/productModel");

const UserMocks = require("../MockData/MOCK_DATA_USER.json")
const ProductMocks = require("../MockData/MOCK_DATA_PRODUCT.json")

beforeAll(async () => {
    await User.deleteMany({});
    await Product.deleteMany({});
    await User.insertMany(UserMocks);
}
)
describe("Products API", function () {
    describe("GET /products", function () {
        describe("when fetching all products", function () {
            it("should return all products in descending order of creation date", async function () {
                // Test logic here
            });

            it("should return products in JSON format", async function () {
                // Test logic here
            });

            it("should return a limited number of products when 'number' query parameter is provided", async function () {
                // Test logic here
            });

            it("should return 404 if no products are found", async function () {
                // Test logic here
            });
        });
    });

    describe("GET /products/:productID", function () {
        describe("when fetching a specific product", function () {
            it("should return a product by its ID", async function () {
                // Test logic here
            });

            it("should return 404 if the product is not found", async function () {
                // Test logic here
            });

            it("should return 400 if the ProductID is invalid", async function () {
                // Test logic here
            });
        });
    });

    describe("POST /products", function () {
        describe("when creating a product", function () {
            it("should create a new product and return 201 status", async function () {
                // Test logic here
            });

            it("should return 403 if the user is not a vendor", async function () {
                // Test logic here
            });

            it("should return 400 if product creation fails", async function () {
                // Test logic here
            });
        });
    });

    describe("PUT /products/:productID", function () {
        describe("when updating a product", function () {
            it("should update an existing product and return the updated product", async function () {
                // Test logic here
            });

            it("should return 404 if the product is not found", async function () {
                // Test logic here
            });

            it("should return 400 if the ProductID is invalid", async function () {
                // Test logic here
            });

            it("should return 500 if the update fails due to server error", async function () {
                // Test logic here
            });
        });
    });

    describe("DELETE /products/:productID", function () {
        describe("when deleting a product", function () {
            it("should delete a product and return success message", async function () {
                // Test logic here
            });

            it("should return 404 if the product is not found", async function () {
                // Test logic here
            });

            it("should return 400 if the ProductID is invalid", async function () {
                // Test logic here
            });

            it("should return 500 if the deletion fails due to server error", async function () {
                // Test logic here
            });
        });
    });

    describe("POST /products/:productID/comment", function () {
        describe("when adding a comment to a product", function () {
            it("should add a comment and return success message", async function () {
                // Test logic here
            });

            it("should return 400 if the ProductID is invalid", async function () {
                // Test logic here
            });

            it("should return 500 if adding the comment fails due to server error", async function () {
                // Test logic here
            });
        });
    });

    describe("DELETE /products/:productID/comment", function () {
        describe("when deleting a comment from a product", function () {
            it("should delete the comment and return success message", async function () {
                // Test logic here
            });

            it("should return 404 if the comment is not found", async function () {
                // Test logic here
            });

            it("should return 400 if the ProductID is invalid", async function () {
                // Test logic here
            });

            it("should return 500 if deleting the comment fails due to server error", async function () {
                // Test logic here
            });
        });
    });
});




afterAll(async () => {
    await User.deleteMany({});
    await Product.deleteMany({});
})
