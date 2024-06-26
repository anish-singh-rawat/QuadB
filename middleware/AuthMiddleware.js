import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const secret = process.env.JWTKEY;

const authMiddleWare = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    console.log(token, "token");

    if (!token) {
      return res.status(401).send({ message: "access denied" });
    }

    const decoded = jwt.verify(token, secret);
    console.log(decoded);

    req.body._id = decoded?.id;

    if (req.body._id === decoded?.id) {
      return next();
    }

    return res.status(401).send({ message: "access denied" });

  } catch (error) {
    console.log(error);
    return res.status(401).send({ message: "access denied" });
  }
};

export default authMiddleWare;
