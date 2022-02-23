const {
    getAllCustomersHandler,
    addCustomerHandler,
    changeCurrentBalanceHandler,
  } = require("./customerController");
  
  const router = require("express").Router();
  
  router.get("/customers", getAllCustomersHandler);
  router.post("/customers", addCustomerHandler);
  router.patch("/customers", changeCurrentBalanceHandler);
  
  module.exports = router;