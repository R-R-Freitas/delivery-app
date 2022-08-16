import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BEIGE, YELLOW } from './Colors';

export const OrderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  height: 100%;
  margin: 3rem auto;
  width: 80%;
`;

export const LinkCard = styled(Link)`
  text-decoration: none;
`;

export const OrderCard = styled.div`
  align-items: center;
  background-color: ${BEIGE};
  border-radius: 5px;
  color: #342723;
  display: flex;
  height: 6rem;
  justify-content: space-evenly;
  margin: 1rem;
  width: 22rem;
`;

export const ColumnContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const StatusContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
`;

export const Status = styled.p`
  background-color: ${YELLOW};
  border-radius: 5px;
  font-size: 1.2rem;
  font-weight: bold;
  margin: auto 5px;
  padding: 0.8em;
`;
