import React from 'react';
import styled from 'styled-components';

import { Badge } from 'react-bootstrap';

import AppContext from '../../context';

const Tags = () => (
  <AppContext.Consumer>
    {context => (
      <>
        <div>
          <Tag
            variant="secondary"
            onClick={() => context.handleTagClick('pierogi')}
          >
            pierogi
          </Tag>
          <Tag
            variant="secondary"
            onClick={() => context.handleTagClick('pierogi')}
          >
            pizza
          </Tag>
          <Tag
            variant="secondary"
            onClick={() => context.handleTagClick('zupa')}
          >
            zupa
          </Tag>
          <Tag
            variant="secondary"
            onClick={() => context.handleTagClick('kotlet')}
          >
            kotlet
          </Tag>
          <Tag
            variant="secondary"
            onClick={() => context.handleTagClick('ciasto')}
          >
            ciasto
          </Tag>
          <Tag
            variant="secondary"
            onClick={() => context.handleTagClick('koktajl')}
          >
            koktajl
          </Tag>
          <Tag
            variant="secondary"
            onClick={() => context.handleTagClick('kompot')}
          >
            kompot
          </Tag>
          <Tag
            variant="secondary"
            onClick={() => context.handleTagClick('tort')}
          >
            tort
          </Tag>
          <Tag
            variant="secondary"
            onClick={() => context.handleTagClick('bułka')}
          >
            bułka
          </Tag>
        </div>
      </>
    )}
  </AppContext.Consumer>
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
