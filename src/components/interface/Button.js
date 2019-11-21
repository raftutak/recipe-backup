import styled from 'styled-components';

const Button = styled.button`
  margin-bottom: 40px;
  height: 45px;
  width: 170px;
  background-color: white;
  font-family: 'Poppins', sans-serif;
  font-size: 1.6rem;
  font-weight: 600;
  color: #1e2d42;
  border: 1px solid #1e2d42;
  border-radius: 25px;
  outline: none;
  transition: 0.2s;
  cursor: pointer;

  :hover {
    background-color: #86c931;
    border: 1px solid #86c931;
    color: white;
  }
`;

export default Button;
