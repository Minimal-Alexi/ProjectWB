const logger = (req, res, next) => {
    const currentDate = new Date().toISOString();
    console.log(`[${currentDate}] ${req.method} request to ${req.url}`);
    next(); // Pass control to the next middleware function
  };
  
  module.exports = logger;
  