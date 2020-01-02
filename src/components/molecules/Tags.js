import React from 'react';
import styled from 'styled-components';

import { Badge } from 'react-bootstrap';

const Tags = () => (
  <>
    <div>
      <Tag variant="secondary">pierogi</Tag>
      <Tag variant="secondary">pizza</Tag>
      <Tag variant="secondary">zupa</Tag>
      <Tag variant="secondary">kotlet</Tag>
      <Tag variant="secondary">ciasto</Tag>
      <Tag variant="secondary">koktajl</Tag>
      <Tag variant="secondary">kompot</Tag>
      <Tag variant="secondary">tort</Tag>
      <Tag variant="secondary">bułka</Tag>
    </div>
  </>
);

const Tag = styled(Badge)`
  margin: 0 10px 10px 0;
  padding: 6px 10px;
  font-weight: 400;
  cursor: pointer;
  border-radius: 5px;

  :hover {
    background-color: hsl(44, 60%, 42%);
  }
`;

export default Tags;
