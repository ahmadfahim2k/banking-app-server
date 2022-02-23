const { StatusCodes } = require("http-status-codes");
const Customer = require("./customerModel");

//get all customers
exports.getAllCustomersHandler = async (req, res) => {
  try {
    const data = await Customer.find({});
    console.log(data)
    res.status(StatusCodes.OK).json({ message: `All Customers`, data });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: `ERROR`, error });
  }
};

//add customer
exports.addCustomerHandler = async (req, res) => {
  try {
    const { name, email, currentBalance } = req.body;
    const customer = await Customer.findOne({ email });
    if (!customer) {
      const newCustomer = new Customer({ name, email, currentBalance });
      const data = await newCustomer.save();
      res
        .status(StatusCodes.OK)
        .json({ message: `New Customer is Added`, data });
    } else {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: `This email already exists` });
    }
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: `ERROR`, error });
  }
};

//Change the current balance

exports.changeCurrentBalanceHandler = async (req, res) => {
  try {
    const { email, currentBalance } = req.body;
    const data = await Customer.findOneAndUpdate(
      { email },
      { currentBalance },
      { returnDocument: "after" }
    );
    res
      .status(StatusCodes.OK)
      .json({ message: `The Customer is updated`, data });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: `ERROR`, error });
  }
};