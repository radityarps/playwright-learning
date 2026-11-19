import { test, expect } from "@playwright/test";

test.use({
  baseURL: "https://jsonplaceholder.typicode.com",
});

test("API: retrieve existing post", async ({ request }) => {
  // TODO: GET /posts/1
  const response = await request.get("/posts/1");
  // TODO: Assert HTTP 200
  expect(response.status()).toBe(200);
  // TODO: Assert id, userId, title, body
  const data = await response.json();
  expect(data).toEqual({
    id: 1,
    userId: 1,
    title: expect.any(String),
    body: expect.any(String),
  });
  // throw new Error("TODO: Implement GET assertions");
});

test("API: create post", async ({ request }) => {
  const payload = {
    title: "Logistics Automation",
    body: "Testing API contracts",
    userId: 1,
  };

  // TODO: POST /posts
  const response = await request.post("/posts", {
    data: payload,
  });
  // TODO: Assert HTTP 201
  expect(response.status()).toBe(201);
  // TODO: Assert response matches payload
  const data = await response.json();
  expect(data).toMatchObject(payload);
  // TODO: Assert returned ID is a number
  expect(data.id).toEqual(expect.any(Number));
  // throw new Error("TODO: Implement POST assertions");
});

test("API: nonexistent post", async ({ request }) => {
  // TODO: GET /posts/999999
  const response = await request.get("/posts/999999");
  // TODO: Assert HTTP 404
  expect(response.status()).toBe(404);
  // throw new Error("TODO: Implement negative test");
});
