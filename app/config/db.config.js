require('dotenv').config();

let USER_DB = process.env.USR_MONGODB;
let PASS_DB = process.env.PSW_MONGODB;
let HOST_DB = process.env.URL_MONGODB;

module.exports = {
    url: `mongodb+srv://${USER_DB}:${PASS_DB}@${HOST_DB}/?retryWrites=true&w=majority`
};
