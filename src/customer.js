const { getClient, projectKey } = require('./client.js');

const getAllCustomers = () => {
  return getClient().execute({
    uri: `/${ projectKey }/customers`,
    method: 'GET'
  })
}

const deleteCustomer = () => {
  return getCustomer().then((results) => {
    const customerArray = new Array();
    customerArray.push(results);
    console.log(customerArray);
  //Delete the current customer
    // return getClient().execute({
    //   uri: `/${ projectKey }/customers/${customerArray.body.id}?version=${customerArray.body.version}`,  
    //   method: 'DELETE',
    //   body: {
    //     version: customerArray.body.version
    //   }
    // })
  })
}


// module.exports.createCustomer = createCustomer;
module.exports.getAllCustomers = getAllCustomers;
// module.exports.deleteCustomer = deleteCustomer;

// const getCustomer = () => {
//   // TODO 7.1: Get the current cart of your customer
//   return getClient().execute({
//     uri: ({ projectKey }).customers.byId(customerId).build(),
//     method: 'GET'
//   })
// }