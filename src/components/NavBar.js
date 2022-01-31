import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Navigation = ({ token }) => {
  const history = useHistory();
  const handleClick = async () => {
    localStorage.removeItem('token');
    history.push('/');
    window.location.reload(false);
  };
  return (
    <>
    <div className='title'>FITNESS TRACKER</div>
      <nav className='header'>
        
       
         
            <Link to='/' >
              Home
            </Link>
          
          
            <Link to='/routines' >
              Routines
            </Link>
  
          
            <Link to='/activities' >
              Activities
            </Link>
          
          <br />
          {!token ? (
            <>
              
                <Link to='/login'>
                  Login
                </Link>
              
            </>
          ) : (
            <>
              
                <Link to='/profile'>
                  Profile
                </Link>
              

              <br />
              
                <Link to='/myroutines'>
                  My Routines
                </Link>
              
              <br />
      
                <Link to='/' onClick={handleClick}>
                  Logout
                </Link>
             
            </>
          )}
        
      
      </nav>
    </>
  );
};

export default Navigation;