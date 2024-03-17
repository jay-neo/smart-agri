const { validateToken } = require("../services/auth");

function checkForAuthenticationCookie(cookieName) {
  return (req, res, next) => {
    const tokenCookieValue = req.cookies[cookieName];
    if (!tokenCookieValue) {
      return next();
    }

    try {
      const userPayload = validateToken(tokenCookieValue);
      req.user = userPayload;
    } catch (err) {
      res.clearCookie(cookieName);
      return res.status(401).json({ message: "Your token is expired!" });
    }
    next();
  };
}

module.exports = {
  checkForAuthenticationCookie,
};
