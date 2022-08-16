import styled from 'styled-components';
import { BEIGE, LIGTH_BEIGE, LIGTHER_GRAY, REDDISH_BROWN } from './Colors';
import { Button, FormContainer } from './Login';

export const OrderContainer = styled(FormContainer)`
  align-items: stretch;
  background-image: none;
  justify-content: flex-start;
  height: auto;
  margin-top: 1rem;
`;

export const TitleCheckout = styled.h1`
  color: #43342f;
  font-size: 1.5rem;
  margin-left: 5rem;
`;

export const TableContainer = styled.table`
  border-collapse: collapse;
  font-size: 1rem;
  width: 90%;
  margin: 1rem auto;
`;

export const TableHeader = styled.thead`
  background-color: ${BEIGE};
  border: 1px solid ${BEIGE};
  text-align: center;

  & th {
    background-color: ${BEIGE};
    border: 1px solid ${BEIGE};
    color: #43342f;
  }
`;

export const TableBody = styled.tbody`
  text-align: center;

  td {
    padding: 0.5rem;
  }

  tr {
    :hover {
      background-color: ${LIGTH_BEIGE};
    }
  }
`;

export const RemoveButton = styled(Button)`
  background-color: ${REDDISH_BROWN};
  height: auto;
  margin: 0;
  width: auto;
`;

export const TotalButton = styled(Button)`
  background-color: ${LIGTHER_GRAY};
  color: #43342f;
  font-size: 1.3rem;
  height: 3rem;
  margin: 0.4em 4rem auto auto;
  width: 15.5rem;
`;
