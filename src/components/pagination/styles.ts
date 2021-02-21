import styled, { css } from 'styled-components';
import { theme } from '../../utils/globalStyles';

export const PaginationList = styled.ul`
  text-align: center;
  order: 3;
  width: 100%;
  display: inline-flex;
  align-items: center;
  padding-left: 0;
  margin-bottom: 0;
  justify-content: center;
`;

export const PageItem = styled.li<{
  hasNextOrPrev?: boolean;
  isActive?: boolean;
}>`
  margin-right: 0.25rem;
  &:last-child {
    margin-right: 0;
  }
  &&  {
    opacity: ${(props) => (props.hasNextOrPrev ? '1' : '0')};
  }
  ${(props) =>
    props.isActive &&
    css`
      a {
        background: ${theme.colors.earthBrown};
        color: ${theme.colors.white};
        pointer-events: none;
      }
    `}
`;

export const PageLink = styled.a`
  transition: all 0.3s ease-in-out;
  color: ${theme.colors.grayDark};
  padding: 0.375rem 0.4375rem;
  text-decoration: none;
  &:hover {
    background: ${theme.colors.earthBrown};
    color: ${theme.colors.white};
  }
  &:focus {
    box-shadow: inset 0 0 0 2px ${theme.colors.earthBrown};
  }
`;
