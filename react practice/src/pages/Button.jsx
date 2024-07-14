import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapButton from 'react-bootstrap/Button';
// import Button from 'react-bootstrap/Button';
const Button = () => {
  return (
    <>
      <BootstrapButton variant="outline-primary">Primary</BootstrapButton>
      <BootstrapButton variant="outline-secondary">Secondary</BootstrapButton>
      <BootstrapButton variant="outline-success">Success</BootstrapButton>
      <BootstrapButton variant="outline-warning">Warning</BootstrapButton>
      <BootstrapButton variant="outline-danger">Danger</BootstrapButton>
      <BootstrapButton variant="outline-info">Info</BootstrapButton>
      <BootstrapButton variant="outline-light">Light</BootstrapButton>
      <BootstrapButton variant="outline-dark">Dark</BootstrapButton>
    </>
  );
};

export default Button;
