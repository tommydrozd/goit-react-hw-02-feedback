import styled from 'styled-components';

export const Button = styled.button`
  padding: 10px 20px;
  margin: 5px;
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #2575fc, #6a11cb);
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
