var Auth0 = require('auth0');
var dotenv = require('dotenv');
dotenv.load();
var api = new Auth0({
  domain:       process.env.AUTH0_DOMAIN,
  clientID:     process.env.AUTH0_GLOBAL_CLIENT_ID,
  clientSecret: process.env.AUTH0_GLOBAL_CLIENT_SECRET
});

var user_id_to_impersonate = 'USER_ID_OF_THE_USER_YOU_ARE_TRYING_TO_IMPERSONATE';
var impersonator_id = "USER_ID_OF_THE_IMPERSONATOR";
var impersonator_email_address = "EMAIL_ADDRESS_OF_THE_IMPERSONATOR";
api.impersonateUser(user_id_to_impersonate, {
  protocol: 'oauth2',
  client_id: process.env.AUTH0_CLIENT_ID,
  impersonator_id: impersonator_id,
  protocol: "oauth2",
  additionalParameters:{
  		"callback_url":"http://localhost:3000/callback",
      "scope": "openid email user_metadata"
  },
  impersonator:{
  	"email": impersonator_email_address,
  	"user_id": impersonator_id
  }
}, function (err, result){
	console.log(err, result);
});
