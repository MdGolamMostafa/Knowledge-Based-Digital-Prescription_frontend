import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import Prescription from '../Presciption/Prescription';
import { Link } from "react-router-dom";
import InputItem from './InputItem';

const Login = () => {

  const [newUser, setNewUser] = useState(true);

  const onChangeHandler = e => {
    e.persist()
  }

  const submitHandler = e => {
    if (Object.keys.length === 0 && newUser) {
    }
    e.preventDefault();
  }

  return (
      <Container className="pr-0 pt-5">
      <Row>
        <Col sm={8} className="m-auto" xl={6} md="8">
          <Card>
            <Card.Body>
              <h2 className="py-1">{newUser ? 'Create an account' : 'Login'}</h2>
              <Form autoComplete="off" onSubmit={submitHandler}>
                {newUser && (
                  <InputItem 
                    onChangeHandler={onChangeHandler}
                    name="firstName"
                    customClass="loginInput" autoFocus
                    placeholder="First Name" 
                    />
                )}
                {newUser && (
                  <InputItem 
                    onChangeHandler={onChangeHandler}
                    name="lastName"
                    customClass="loginInput"
                    placeholder="Last Name" 
                    />
                )}
                <InputItem 
                  onChangeHandler={onChangeHandler}
                  name="email"
                  customClass="loginInput"
                  type="email"
                  placeholder="Email" 
                  />
                <InputItem 
                  onChangeHandler={onChangeHandler}
                  name="password"
                  type="password"
                  customClass="loginInput"
                  placeholder="Password" 
                  />
                {newUser && (
                  <InputItem 
                    onChangeHandler={onChangeHandler}
                    type="password"
                    name="confirmPassword"
                    customClass="loginInput"
                    placeholder="Confirm Password" 
                    />
                )}
                { (
                  <p className="text-danger text-center  py-2">
                  </p>
                )}
                <Link to="/prescription">
                  <Button className="w-100" variant="success" type="submit">
                    {newUser ? 'Create an Account' : 'Login'}
                  </Button>
                </Link>

              </Form>
              <p className="text-center pt-2">
                {newUser ? 'Already have an account' : 'Don’t have an account'} ?
                  <span onClick={() => setNewUser(!newUser)} className="text-warning login">
                  {newUser ? ' Login' : ' Create an account'}
                </span>
              </p>
            </Card.Body>
          </Card>
          <br />
          <br />
        </Col>
      </Row>
      
    </Container>
  );
};

export default Login;