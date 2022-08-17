import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BEIGE, BEIGE2, LIGTHER_GRAY2, LIGTH_GRAY, YELLOW } from './Colors';

export const OrderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  height: 100%;
  margin: 3rem auto;
  width: 80%;
`;

export const LinkCard = styled(Link)`
  align-items: center;
  background-color: ${BEIGE2};
  border: 1px solid ${LIGTH_GRAY};
  border-radius: 5px;
  box-shadow: 3px 3px 10px ${LIGTH_GRAY};
  color: #342723;
  display: flex;
  height: 6rem;
  justify-content: space-evenly;
  margin: 1rem;
  width: 22rem;
  text-decoration: none;
`;

export const ColumnContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const StatusContainer = styled.div`
  align-items: center;
  background-color: ${LIGTHER_GRAY2};
  border-left: 1px solid ${LIGTH_GRAY};
  border-top-right-radius: 5px;
  display: flex;
  height: 100%;
  margin-right: -8%;
  padding-right: 0.6em;
`;

export const Status = styled.p`
  background-color: ${YELLOW};
  border-radius: 5px;
  font-size: 1.2rem;
  font-weight: bold;
  margin: auto 5px;
  padding: 0.8em;
`;

export const TextOrder = styled(Status)`
  background-color: ${BEIGE};
  font-size: 1rem;
  margin: 5px;
  padding: 0.3em;
`;
