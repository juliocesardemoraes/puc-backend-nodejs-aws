const supertest = require("supertest");
const app = require("..");
const requestWithSupertest = supertest(app);

test("GET / should return a 200 status code", async () => {
  const res = await requestWithSupertest.get("/");
  expect(res.status).toEqual(200);
});
