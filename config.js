const mongoose = require("mongoose");

const dbConn = () => {
  mongoose
    .connect(process.env.LOCAL_DB)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

module.exports = dbConn;