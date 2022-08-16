import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { LIGHTER_BROWN, MEDIUM_BROWN, RED } from './Colors';

export const NavContainer = styled.div`
  align-items: center;
  background-color: ${MEDIUM_BROWN};
  display: flex;
  height: 3.5rem;
  justify-content: space-around;
  padding: 0 1rem;
  width: calc(100% - 2rem);
`;

export const NavLink = styled(Link)`
  color: ${LIGHTER_BROWN};
  font-size: 1.5rem;
  text-decoration: none;

  :hover {
    color: ${RED};
  }
`;

export const NavName = styled.p`
  color: ${LIGHTER_BROWN};
  font-size: 1.5rem;

  :hover {
    color: ${RED};
  }
`;

export const NavButton = styled.button`
  background-color: ${MEDIUM_BROWN};
  color: ${LIGHTER_BROWN};
  font-size: 1.5rem;

  :hover {
    color: ${RED};
  }
`;
