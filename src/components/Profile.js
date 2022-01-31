import React from 'react';
import { callApi } from '../api';

const Profile = ({ token, userData }) => {
    console.log(userData)
  return <>Hello {userData.username}!</>;
};

export default Profile;