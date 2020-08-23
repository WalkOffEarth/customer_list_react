var faker = require("faker");

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function generateAddress(count) {
  const addresses = [];
  while (count > 0) {
    addresses.push({
      streetName: faker.address.streetName(),
      city: faker.address.city(),
      state: faker.address.state(),
      country: faker.address.country(),
      zipCode: faker.address.zipCode(),
    });
    count--;
  }
  return addresses;
}

function generateCustomers() {
  var customers = [];
  for (var id = 0; id < 50; id++) {
    var firstName = faker.name.firstName();
    var lastName = faker.name.lastName();
    var age = randomNumber(20, 60);
    var addresses = generateAddress(randomNumber(1, 5));

    customers.push({
      id: `cust-${id + 1}`,
      first_name: firstName,
      last_name: lastName,
      age: age,
      addresses: addresses,
    });
  }
  return { customers: customers };
}
module.exports = generateCustomers;
