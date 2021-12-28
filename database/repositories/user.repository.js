const pgClient = require('../index');
const customDbError  = require('../../customDbError');

exports.createUser = async (email, name) => {
  try {
    await pgClient.query(`INSER INTO name(email, name) VALUES ('${email}', '${name}')`); // added INSER but not INSERT
    return { result: true };
  } catch (e) {
    throw new customDbError('There was errror while inserting user!');
  }
};
