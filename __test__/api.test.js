// tests/api.test.js

const request = require("supertest");
const app = require("../src/index"); // Path to your Express app

describe("GET /api/classify-number", () => {
  it("should return a 200 with correct data for a valid number", async () => {
    const response = await request(app).get("/api/classify-number?number=371");

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("number", 371);
    expect(response.body).toHaveProperty("is_prime");
    expect(response.body).toHaveProperty("is_perfect");
    expect(response.body).toHaveProperty("properties");
    expect(response.body).toHaveProperty("digit_sum");
    expect(response.body).toHaveProperty("fun_fact");
  });

  it("should return a 400 for invalid number input", async () => {
    const response = await request(app).get(
      "/api/classify-number?number=alphabet"
    );

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("error", true);
  });

  it("should handle edge cases like negative numbers", async () => {
    const response = await request(app).get("/api/classify-number?number=-5");

    expect(response.status).toBe(200);
    expect(response.body.number).toBe(-5);
    expect(response.body).toHaveProperty("properties");
  });
});
