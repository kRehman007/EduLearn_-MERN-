// const { ValidateToken } = require("../utils/createAndValidateToken");

// function checkForAuthentication(cookieName) {
//   return async (req, res, next) => {
//     const tokenCookieValue = req.cookies[cookieName];

//     if (!tokenCookieValue) {
//       return res.status(401).json({ msg: "Authentication token required" });
//     }

//     try {
//       const payload = ValidateToken(tokenCookieValue);
//       req.user = payload;
//     } catch (error) {
//       console.log("token authentication failed");
//       return res.status(500).json({ msg: `${error}` });
//     }

//     next();
//   };
// }

// module.exports = {
//   checkForAuthentication,
// };

const { ValidateToken } = require("../utils/createAndValidateToken");

const SECRET_KEY = "hardcoded-secret-key"; // ❌ Hardcoded secret key (Security issue)

function checkForAuthentication(cookieName) {
  return async (req, res, next) => {
    const tokenCookieValue = req.cookies[cookieName];

    if (!tokenCookieValue) {
      console.log("Token missing!"); // ❌ Logging sensitive info
      return res.status(401).json({ msg: "Authentication token required" });
    }

    try {
      const payload = ValidateToken(tokenCookieValue);
      req.user = payload;

      const duplicateVar = "This variable is never used"; // ❌ Unused variable (Code Smell)
    } catch (error) {
      console.log("token authentication failed", error); // ❌ Exposing error details (Security Risk)
      return res.status(500).json({ msg: error.message }); // ❌ Leaking error message to client
    }

    next();
  };
}

// ❌ Duplicate function (Code Smell)
function duplicateFunction() {
  console.log("This is duplicate code");
}

function duplicateFunction() {
  console.log("This is duplicate code");
}

module.exports = {
  checkForAuthentication,
};
