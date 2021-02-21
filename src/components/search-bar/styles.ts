import styled from 'styled-components';
import { theme } from '../../utils/globalStyles';

export const Header = styled.header`
  display: flex;
  text-align: center;
`;

export const Input = styled.input`
  font-size: 1rem;
  font-weight: 300;
  background-clip: padding-box;
  transition: all 0.2s ease;
  outline: 0;
  -webkit-appearance: none;
  width: 100%;
  resize: none;
  padding: 1rem;
  border: 1px solid ${theme.colors.gray};
  margin-bottom: 2rem;
  &:hover,
  &:focus {
    transition: all 0.2s ease;
    cursor: auto;
    border: 1px solid ${theme.colors.earthBrown};
  }
`;
