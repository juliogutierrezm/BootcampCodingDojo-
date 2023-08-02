const express = require("express");
const {faker} = require("@faker-js/faker");

const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

class User {
  constructor() {
    this.firstName = faker.person.firstName();
    this.lastName = faker.person.lastName();
    this.phoneNumber = faker.phone.number();
    this.email = faker.internet.email();
    this.password = faker.internet.password();
  }
}
class Company {
  constructor() {
    this.name = faker.company.name(); 
    this.address = {
      street: faker.location.street(),
      city: faker.location.city(),
      state: faker.location.state(),
      zipCode: faker.location.zipCode(),
      country: faker.location.country(),
    };
  }
}
app.post("/api/users/new", (req, res) => {
  let newUser = new User();
  res.json({ user: newUser });
});

app.post("/api/companies/new", (req, res) => {
  let newCompany = new Company();
  res.json({ company: newCompany });
});

app.post("/api/user/company", (req, res) => {
  let newUser = new User();
  let newCompany = new Company();
  res.json({ user: newUser, company: newCompany})

});



app.listen(port, () => console.log(`Listening on port: ${port}`));
