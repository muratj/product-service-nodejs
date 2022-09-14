const Exception = (error, description) => {
  return {
    error,
    description
  }
}

module.exports = Exception;