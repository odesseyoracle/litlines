export const authenticate = (req, res, next) => {
  const token = req.cookies.sessionToken;

  if (!token) {
    res.status(401).json({ message: "No token present" });
  }

  jwt.verify(token, "secretCode", (err, decodedToken) => {
    if (err) {
      return res.status(401).json({ message: "Token not valid" });
    }
    req.userId = decodedToken.userId;
    next();
  });
};
