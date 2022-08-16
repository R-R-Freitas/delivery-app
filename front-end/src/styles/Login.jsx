import styled from 'styled-components';
import { DARK_BLUE, LIGHTER_BLUE, LIGHTER_GRAY, MEDIUM_BLUE, WHITE } from './Colors';

export const FormContainer = styled.div`
  align-items: center;
  background-image: url("backgroundDrink.png");
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  width: 100%;
`;

export const Title = styled.h1`
  color: ${DARK_BLUE};
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

export const Form = styled.div`
  align-items: center;
  background-color: ${LIGHTER_BLUE};
  border-radius: 0.2em;
  box-shadow: 3px 3px 10px ${LIGHTER_GRAY};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  width: 20rem;
`;

export const Label = styled.label`
  color: #1c472f;
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
`;

export const Input = styled.input`
  background-color: ${WHITE};
  border-radius: 5px;
  height: 2rem;
  margin: 0.4rem 0;
  outline: none;
  padding-left: 0.5rem;
  width: 15rem;
`;

export const Button = styled.button`
  background-color: ${MEDIUM_BLUE};
  border-radius: 5px;
  color: ${WHITE};
  font-weight: bold;
  height: 2rem;
  margin: 0.4em 0;
  width: 15.5rem;
`;

export const ErrorMessage = styled.p`
  margin-top: 0.3rem;
`;
