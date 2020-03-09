const basicAuth = require('express-basic-auth');

const auth = basicAuth({
  users: process.env.USERS,
});