const express = require("express");
const port = 3038; 
const sequelize = require("./database/sequelize");
const app = express();
app.use(express.json());

const server =async() =>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}
server()


 
app.listen(port,()=>{
    console.log(`running on port ${port}`);
})










