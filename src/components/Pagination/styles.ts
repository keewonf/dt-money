import styled from "styled-components";

export const PaginationContainer = styled.nav`
  width: 100%;
  max-width: 1120px;
  margin: 2.5rem auto 0;
  padding: 0 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

`;

export const ArrowButton = styled.button`
  border: 0;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme["green-500"]};
  
  &:disabled {
    color: ${({ theme }) => theme["gray-600"]};
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

export const PageButtons = styled.div`
  gap: 0.5rem;
  display: flex;
  align-items: center;
  button {
    border-radius: 6px;
    width: 2.5rem;
    height: 2.5rem;
    background-color: ${({ theme }) => theme["gray-600"]};
    color: ${({ theme }) => theme["gray-400"]};
    border: 0;
    cursor: pointer;
    font-weight: bold;

    &.active {
      background-color: ${({ theme }) => theme["green-700"]};
      color: ${({ theme }) => theme.white};
    }
  }
`;
