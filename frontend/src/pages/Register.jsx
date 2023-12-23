import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const Register = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your own form submission logic here
  };
      
  return (
    
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className=" -mt-20 mb-4 text-2xl text-center">Join With Us!</h1>
      <Form onSubmit={handleSubmit} className="w-full max-w-sm">
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name="name" id="name" required />
        </FormGroup>
        <FormGroup>
          <Label for="address">Address</Label>
          <Input type="text" name="address" id="address" required />
        </FormGroup>
        <FormGroup>
          <Label for="phone">Phone Number</Label>
          <Input type="tel" name="phone" id="phone" required />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" required />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input type="password" name="password" id="password" required />
        </FormGroup>
        <Button
          type="submit"
          style={{backgroundColor: '#369445'}}
          className=" custom-button w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200"
        >
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;
