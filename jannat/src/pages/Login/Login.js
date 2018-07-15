import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
        <Form inline>
        <FormGroup>
          <Label for="exampleEmail" hidden>Mobile Number </Label>
          <Input type="number" name="mobileNumber" id="mobileNumber" placeholder="Mobile Number" />
        </FormGroup>
        {' '}
        <FormGroup>
          <Label for="examplePassword" hidden>Password</Label>
          <Input type="password" name="password" id="otp" placeholder="OTP" />
        </FormGroup>
        {' '}
        <Button>Submit</Button>
      </Form>
    );
  }
}