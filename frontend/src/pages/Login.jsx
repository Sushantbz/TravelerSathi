import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button, NavLink } from 'reactstrap';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email validation
    if (!email.trim()) {
      setError('Please enter your email');
      return;
    }

    // Password validation
    if (!password.trim()) {
      setError('Please enter your password');
      return;
    }

    // Add additional validation logic as needed

    // Reset error state
    setError('');

    // Add your authentication logic here
    console.log('Login clicked');
  };

  return (
    <Container>
      <Row className="mt-5">
        <Col md={{ size: 6, offset: 3 }}>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type={showPassword ? 'text' : 'password'}
                name="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                type="button"
                color="link"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? 'Hide' : 'Show'}
              </Button>
            </FormGroup>
            {error && <div className="text-danger">{error}</div>}
            <Button color="primary" block>
              Login
            </Button>
          </Form>
          <div className="mt-3">
            <NavLink href="/forgot-password">Forgot Password?</NavLink>
          </div>
          <div  className="mt-2">
            <NavLink href="/signup">Don't have an account? Sign up here</NavLink>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
