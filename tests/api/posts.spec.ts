import { test, expect } from "@playwright/test";

test.use({
  baseURL: "https://jsonplaceholder.typicode.com",
});

test("TC-API-001: Get existing post", async ({ request }) => {
  // TODO: GET /posts/1
  const response = await request.get("/posts/1");

  // TODO: Assert status is 200
  expect(response.status()).toBe(200);
  // TODO: Validate response data
  const data = await response.json();
  expect(data).toMatchObject({
    id: 1,
    userId: 1,
    title: expect.any(String),
    body: expect.any(String),
  });
});

test("TC-API-002: Get nonexistent post", async ({ request }) => {
  // TODO: GET /posts/999999
  const response = await request.get("/posts/999999");
  // TODO: Assert status is 404
  expect(response.status()).toBe(404);
});

test("TC-API-003: Create post", async ({ request }) => {
  const payload = {
    title: "Learning API Testing",
    body: "Playwright with TypeScript",
    userId: 1,
  };

  // TODO: POST payload to /posts
  const response = await request.post("/posts", { data: payload });
  // TODO: Assert status is 201
  expect(response.status()).toBe(201);
  // TODO: Assert response matches payload
  const data = await response.json();
  expect(data).toMatchObject(payload);
  // TODO: Assert response contains numeric ID
  expect(data.id).toEqual(expect.any(Number));
});

test("TC-API-004: Filter posts by user", async ({ request }) => {
  // TODO: GET /posts with userId=1
  // Hint: request.get supports "params" option
  const response = await request.get("/posts", { params: { userId: 1 } });
  // TODO: Assert status is 200
  expect(response.status()).toBe(200);
  // TODO: Parse JSON response
  const data = await response.json();
  // TODO: Assert result is an array
  expect(Array.isArray(data)).toBe(true);
  // TODO: Assert array is not empty
  expect(data.length).toBeGreaterThan(0);
  // TODO: Assert all posts belong to userId=1
  for (const post of data) {
    expect(post.userId).toBe(1);
  }
});
