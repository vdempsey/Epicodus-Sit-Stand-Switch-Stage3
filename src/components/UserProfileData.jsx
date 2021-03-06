import React from 'react';
import PropTypes from 'prop-types';
import LogIn from './LogIn';
import logoType from '../assets/images/logotype.png';
import frameBlue from '../assets/images/frameBlue.png';
import newProfile from '../assets/images/newProfile.png';
import MenuUser from './MenuUser';
import { Link } from 'react-router';

function UserProfileData(props) {
  const imgProfile = {
    color: 'blue',
    backgroundImage:  `url(${props.url})`,
    backgroundSize: 'cover',
    height: '170px',
    width: '170px',
    borderRadius: '50%',
    border: '1px solid white'

  };

  return (
    <div>
      <div className="header-container">
        <div className="content-container">
          <div>
          <Link to="/"><img className="logoType-sm" src={logoType} /></Link>
          </div>
          <div>
            <div>
              <p className='user-name'>Welcome <span className="name">{props.name}</span></p>
            </div>
          </div>
        </div>
      </div>
      <div className="user-banner">
        <div className="user-information">
          <div>{props.password}</div>
          <div className="profile-img-container">
            <div style={imgProfile}></div>
            <img src={frameBlue}/>
          </div>
          <div className="profile-content-container">
            <div>&quot;{props.motto}&quot;</div>
            <div>&#8208; {props.username}</div>
          </div>
        </div>
      </div>
      <MenuUser />
    </div>
  );
}

UserProfileData.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  username: PropTypes.string,
  password: PropTypes.string,
  motto: PropTypes.string
};

export default UserProfileData;
