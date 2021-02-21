import styled from 'styled-components';
import { theme } from '../../../utils/globalStyles';

export const AppItem = styled.div`
  position: relative;
  width: 100%;
  transition: background 0.3s ease-in-out;
  box-shadow: 0 2px 3px 0 #e8ebed, 0 0 3px 0 #e8ebed;
`;

export const BoxInfo = styled.div`
  transition: all 0.3s ease-in-out;
  padding: 1.5rem;
  flex: 1;
  position: relative;
  clear: both;
  background-color: ${theme.colors.white};
  margin-bottom: 1.5rem;
  cursor: pointer;
  &:hover {
    background-color: rgba(244, 247, 246, 0.3);
  }
`;

export const BoxInfoContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

export const Tags = styled.div`
  color: ${theme.colors.earthBrown};
`;

export const BoxFooter = styled.div`
  display: flex;
`;

export const FooterList = styled.div`
  display: inline-flex;
`;

export const FooterItemList = styled.div`
  display: inline-flex;
  align-items: baseline;
  padding: 0 1rem 0 0;
  span {
    color: ${theme.colors.grayDark};
  }
`;
