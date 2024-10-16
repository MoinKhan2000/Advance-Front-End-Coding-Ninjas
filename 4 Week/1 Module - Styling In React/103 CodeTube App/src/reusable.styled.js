import styled from 'styled-components';

// Reusable Button Component
export const Button = styled.button`
  background-color: ${(props) => props.bg || 'blue'};
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  &:hover {
    opacity: 0.8;
  }
`;

// Reusable Container Component
export const Container = styled.div`
  display: flex;
  flex: ${(props) => props.flex || 1};
  flex-direction: column;
  padding: 10px;
  margin: 10px;
  background-color: #f5f5f5;
  border-radius: 10px;
`;
