const express = require("express");
const app = express();

const users = [
	{ id: 1, name: "Michael", admin: true },
	{ id: 2, name: "Ben", admin: false }
];

app.get("/", (req, res) => 
{
	res.json({ message: "ok" });
});

app.get("/users", (req, res) => 
{
	res.json({ data: users });
});

app.get("/users/:id", (req, res) => 
{
	const { id } = req.params;

	const user = users.filter(user => user.id === parseInt(id));

	if(user.length)
	{
		res.json({ user: user });
		return;
	}
	
	res.json({ msg: "Cannot find this user" });
});

app.use("*", (req, res) => 
{
	res.json({ message: "A little bit lost, aren't we..." });
});

module.exports = app;
