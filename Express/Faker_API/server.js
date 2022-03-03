const faker = require("faker");
const express = require("express");
const app = express();
const port = 8001;

const createUser =() =>{
    const newUser= {
        _id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        password: faker.internet.password()
    };
    return newUser;
};

const createCompany= () =>{
    const newCompany={
        _id: faker.datatype.uuid(),
        name: faker.company.companyName(),
        address:{
            street: faker.address.streetName(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
    return newCompany;
}
const createCompanyandUser = () =>{
    const companyAndUser ={
        company: createCompany(),
        user: createUser()
    }
    return companyAndUser;
}

app.get("/api/users/new" , (req,res) =>{
    res.json(createUser());
});
app.get("/api/companies/new" , (req,res) =>{
    res.json(createCompany());
});
app.get("/api/user/company" , (req,res) =>{
    res.json(createCompanyandUser());
});



app.listen( port, () => console.log(`Listening on port: ${port}`) );