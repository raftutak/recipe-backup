import React from 'react';
import AppContext from '../context';

import { useAuth0 } from '../react-auth0-spa';

const ProfileView = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <AppContext.Consumer>
      {context => (
        <>
          <img src={user.picture} alt="Propile" />
          <h5>ProfileView</h5>
          <p>{user.nickname}</p>
          <p>{user.email}</p>
          <code>{JSON.stringify(user, null, 2)}</code>
        </>
      )}
    </AppContext.Consumer>
  );
};

export default ProfileView;
