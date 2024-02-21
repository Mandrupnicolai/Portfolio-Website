import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #6ea4ff; /* Mild blue */
  color: white;
`;

export const Title = styled.h1`
  font-size: 4rem;
  text-align: center;
`;

export const Toolbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0;
  background-color: #0047ab; /* Darker blue */
  z-index: 999;
  display: flex;
  justify-content: space-evenly;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  font-size: 1rem;
  cursor: pointer;
`;
