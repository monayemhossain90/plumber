import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css'
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const navigate = useNavigate();
  const nameRef = useRef();
  const emailRef = useRef('');
  const passwordRef = useRef('');

  const handleRegister = event => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    createUserWithEmailAndPassword(email, password);
  }
  if (user) {
    navigate('/');
  }
  if (loading) {
    return <Loading></Loading>
  }

  const navigateLogin = () => {
    navigate('/login');
  }
  const handleShowPassword = () => {
    const pass = passwordRef.current;
    if (pass.type === "password") {
      pass.type = "text";
    } else {
      pass.type = "password";
    }
  }
  return (
    <div className='container w-25 mx-auto m-5 shadow' style={{ 'minWidth': '350px' }}>
      <h2 className="text-center text-success">Please Register</h2>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" >
          <Form.Control ref={nameRef} type="text" placeholder="Your Name" id="name" required />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" id="email" required />
        </Form.Group>
        <Form.Group className="password mb-3 d-flex align-items-center" >
          <Form.Control ref={passwordRef} type="password" placeholder="Password" id="password" required />
          <Form.Check label='Show' className='show-pass' type="checkbox" onClick={handleShowPassword} />
        </Form.Group>
        
        <Button className='w-100' variant='success' type="submit">
          Register
        </Button>
      </Form>
      {/* {errorElement} */}
      <p>Already have an account? <Link to='/login' className='text-success text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;