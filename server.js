const express = require('express');
  app = express();
  routes = require('./routes.js');
 mongoose = require('mongoose');
  User = require('./models/UserModel');
  
  mongoose.connect('mongodb://localhost/user_db');

  
routes(app);
app.listen(3000);

