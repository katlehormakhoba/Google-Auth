const express = require('express')


const app = express();


const userRoutes = require('./routes/userRoutes');

// app.use(express.json()); // FOR BEING ABLE TO USE REQ AND MORE or you can use bodyparser
// app.use(express.static('./public'));

app.use('/api/v1/users', userRoutes);

  



console.log(process.env.GOOGLE_REDIRECT_URL)
module.exports = app;

















 
// const googleConfig = {
//     clientId: '31681078057-umpaa7hfl7grrg4b47447i4kfhj7vbrm.apps.googleusercontent.com', // e.g. asdfghjkljhgfdsghjk.apps.googleusercontent.com
//     clientSecret: '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', // e.g. _ASDFA%DFASDFASDFASD#FAD-
//     redirect: `${process.env.GOOGLE_REDIRECT}` // this must match your google api settings
//   };

//   function createConnection() {
//     return new google.auth.OAuth2(
//       googleConfig.clientId,
//       googleConfig.clientSecret,
//       googleConfig.redirect
//     );
//   }



  
// const defaultScope = [
//     'https://www.googleapis.com/auth/plus.me',
//     'https://www.googleapis.com/auth/userinfo.email',
//     `https://www.googleapis.com/auth/userinfo.profile`
//   ];


//   function getConnectionUrl(auth) {
//     return auth.generateAuthUrl({
//       access_type: 'offline',
     
//       prompt: 'consent',
//       scope: defaultScope
//     });
//   }
  
//   function getGooglePlusApi(auth) {
//     return google.plus({ version: 'v1', auth });
//   }


//   app.get('/', (req, res) => {
//     //   res.send(getGoogleAuthURL())
   
//         const auth = createConnection();
//         const url = getConnectionUrl(auth);
//         res.send(url);
      
//   })

//   app.get('/auth/google', async (req, res) => {
 
   
//         const auth = createConnection();
//         const data = await auth.getToken(req.query.code);
//         const tokens = data.tokens;
// console.log(req.query)
// const link = `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${tokens.access_token}` 
//   res.status(200).json({
//       query: req.query,
//       data,
//       link
//   })
// })