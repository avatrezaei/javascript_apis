const oauth2 = require('simple-oauth2').create({
    client: {
        id: '<client-id>',
        secret: '<client-secret>'
    },
    auth: {
        tokenHost: 'https://api.oauth.com'
    }
});

const tokenConfig = {
    username: '<username>',
    password: '<password>',
    scope: '<scope>', // like 'https://www.googleapis.com/auth/userinfo.profile'
};

