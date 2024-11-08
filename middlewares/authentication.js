const { jwt } = require("jsonwebtoken");
const secret = process.env.JWT_SECRET || "SECTRET";
conat authentication =  async (req, res, next) => {
	const authHeader = req.headers['authorization'];
	if (!authHeader) {
		console.log("No auth token!");
		return res.status(404).send({message: 'Auth token not provided!'})
	}
	const token = authHeader.split(" ")[1];
	if (!token || token === null) {
		return res.status(401).send({message: 'Unauthorized or invalid token'})
		// throw new Error("Invalid token");
	}
	try {
		const decoded = jwt.verify(token, secret)
		if (decoded) {
			req.email = decoded.email;
			req.role = decoded.role;
			next()
		}
		else {
			return res.status(403).json({message: "Invalid or expired token"});
		}
	} catch (error) {
		return res.status(500).send(error.)
	}
}
