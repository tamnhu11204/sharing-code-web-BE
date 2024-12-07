const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const generalAccessToken = (payload) => {
  console.log("payload ", payload);
  const access_token = jwt.sign(
    {
      payload,
    },
    process.env.ACCESS_TOKEN,
    { expiresIn: "1h" }
  );

  return access_token;
};

const generalRefreshToken = (payload) => {
  console.log("payload ", payload);
  const refresh_token = jwt.sign(
    {
      payload,
    },
    process.env.REFRESH_TOKEN,
    { expiresIn: "365d" }
  );

  return refresh_token;
};

//tạo access token mới dựa vào refresh token
const refreshTokenJwtService = (token) => {
  return new Promise((resolve, reject) => {
    try {
      jwt.verify(token, process.env.REFRESH_TOKEN, async (err, user) => {
        if (err) {
          resolve({
            status: "ERROR",
            message: "The authentication",
          });
        }
        const { payload } = user;
        const access_token = await generalAccessToken({
          id: payload?.id,
          isAdmin: payload?.isAdmin,
        });

        resolve({
          status: "OK",
          message: "SUCCESS",
          access_token,
        });
      });
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  generalAccessToken,
  generalRefreshToken,
  refreshTokenJwtService,
};
