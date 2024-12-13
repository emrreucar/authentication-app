import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (res, userId, userEmail) => {
  const token = jwt.sign({ userId, userEmail }, process.env.JWT_SECRET_KEY, {
    expiresIn: "7d",
  });

  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000,
    secure: process.env.NODE_ENV === "production",
  });
};
