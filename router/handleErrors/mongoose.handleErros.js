const handleMongooseErrors = (error) => {
  const keys = Object.keys(error?.keyPattern);
  switch (error?.code) {
    case 11000:
      return `this is a unique fields:${keys.toString()}`;
    default:
      return false;
  }
};

module.exports = { handleMongooseErrors };
