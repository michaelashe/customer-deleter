const {getAllCustomers} = require('./src/customer');
// const { customerId } = require('./handson/trainingHelpers.js');
const log = require('./logger.js').log;

getAllCustomers()
 .then(log)
    .catch(log)