const app = require("./app");
require('dotenv').config();    
PORT=process.env.PORT || 3000;
app.listen(PORT,  ()=> {
  console.log("Server listen on port " + PORT);
});
