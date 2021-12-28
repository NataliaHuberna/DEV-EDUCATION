class customDbError extends Error {
  constructor(message) {
    super(message);
    this.name = 'customDbError'; 
  }
}

module.exports = customDbError;
