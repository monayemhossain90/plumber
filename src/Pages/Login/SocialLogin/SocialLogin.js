import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './SocialLogin.css';
import google from '../../../images/social/google.png';
import facebook from '../../../images/social/facebook2.png';
import github from '../../../images/social/github.png';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  let errorElement;
  if (user) {
    navigate('/');
  }
  if (error) {
    errorElement = <p className='text-danger'>Error: {error?.message}</p>
  }
  if (loading) {
    return <Loading></Loading>
  }
  return (
    <div>
      <div className="divider w-75 mx-auto d-flex align-items-center justify-content-center mb-3">
        <span></span>
        <p className='px-2 my-0'>Or</p>
        <span></span>
      </div>
      {errorElement}
      <div className='social-login d-flex flex-column'>
        <button onClick={() => signInWithGoogle()} className='social-btn btn btn-success d-flex justify-content-center align-items-center mb-2'>
          <img className='social-icon' src={google} alt="" />
          <span className=''>Google Log In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;