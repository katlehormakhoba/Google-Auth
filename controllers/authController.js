const { google } = require("googleapis");

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URL
);

const Scope = [
  "https://www.googleapis.com/auth/plus.me",
  "https://www.googleapis.com/auth/userinfo.email",
  `https://www.googleapis.com/auth/userinfo.profile`,
];

exports.googleSignIn = (req, res, next) => {
  const url = oauth2Client.generateAuthUrl({
    // 'online' (default) or 'offline' (gets refresh_token)
    access_type: "offline",

    // If you only need one scope you can pass it as a string
    scope: Scope,
  });

  res.status(200).json({
    url,
  });
};

exports.getGoogleUser = async (req, res) => {
  const data = await oauth2Client.getToken(req.query.code);
  const tokens = data.tokens;

  const link = `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${tokens.access_token}`; 
  res.status(200).json({
    query: req.query,
    data,
    link,
  });
};
