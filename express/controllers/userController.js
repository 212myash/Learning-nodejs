// GET Controller
const getUser = (req, res, next) => {
    try {
      res.json({
        success: true,
        message: "User fetched successfully"
      });
    } catch (error) {
      next(error);
    }
  };
  
  // POST Controller
  const createUser = (req, res, next) => {
    try {
      const { name } = req.body;
  
      if (!name) {
        const err = new Error("Name is required");
        err.status = 400;
        return next(err);
      }
  
      res.json({
        success: true,
        message: "User created",
        data: { name }
      });
  
    } catch (error) {
      next(error);
    }
  };
  
  module.exports = { getUser, createUser };