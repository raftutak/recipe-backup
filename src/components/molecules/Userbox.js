import React from 'react';
import { useAuth0 } from '../../react-auth0-spa';
import styled, { css } from 'styled-components';
import { Button } from 'react-bootstrap';

const Userbox = () => {
  const { isAuthenticated, loginWithPopup, logout, loading, user } = useAuth0();

  return (
    <>
      {!isAuthenticated ? (
        <>
          <StyledButton onClick={() => loginWithPopup({})} variant="secondary">
            Logowanie / Rejestracja
          </StyledButton>
        </>
      ) : (
        <>
          <StyledButton authenticated variant="secondary">
            {loading || !user ? <div>Loading...</div> : <div>{user.name}</div>}
          </StyledButton>
          <StyledButton logout onClick={() => logout()} variant="secondary">
            Wyloguj
          </StyledButton>
        </>
      )}
    </>
  );
};

const StyledButton = styled(Button)`
  margin: 3px 0 4px 10px;
  padding: 6px 12px;
  font-size: 0.9rem;
  border: none;
  border-radius: 5px;

  :hover {
    background-color: hsl(44, 60%, 42%);
  }

  ${({ authenticated }) =>
    authenticated &&
    css`
      background-color: hsl(44, 60%, 42%);
    `}

  ${({ logout }) =>
    logout &&
    css`
      :hover {
        background-color: hsl(348, 45%, 40%);
      }
    `}
`;

export default Userbox;
