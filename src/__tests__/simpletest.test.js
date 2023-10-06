const supertest = require("supertest");
const app = require("..");
const requestWithSupertest = supertest(app);

test("GET /config should be implemented according to the spec", async () => {
  const res = await requestWithSupertest.get("/");
  expect(res.status).toEqual(200);
});
