const app = require("./api");
const supertest = require("supertest");

describe("API", () => 
{
	let request;

	beforeEach(() => 
	{
		request = supertest(app);
	});

	test("should get array of name", done => 
	{
		request
			.get("/users")
			.expect(200, (err, res) => 
			{
				expect(res.body.data).toHaveLength(2);
				done();
			});
	});
});
