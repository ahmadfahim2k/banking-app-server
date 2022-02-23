const mongoose = require("mongoose");

const dbConn = () => {
  mongoose
    .connect(process.env.DEPLOY_CONNECTION)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

module.exports = dbConn;