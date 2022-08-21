const errorMessage = (error, res) => {
  return res.status(500).json({
    error: error.message,
    message: "Something was wrong",
  });
};

module.exports = errorMessage;
