import styled from 'styled-components';
import { theme } from '../../utils/globalStyles';

export const NavSidebar = styled.nav`
  && {
    text-align: left;
    flex: 0;
    order: 1;
  }
`;

export const List = styled.ul`
  list-style-type: none;
  a {
    position: relative;
    display: block;
    padding: 1rem;
    font-size: 17px;
    font-weight: 300;
    color: #202121;
    cursor: pointer;
    background: #f4f7f6;
    border-bottom: 1px solid #E6EAEA;
    text-decoration: none;
    transition: all 0.3s ease;
    &:hover {
        background-color: ${theme.colors.white};
        -webkit-transition: background 0.3s ease-in-out;
        transition: background 0.3s ease-in-out;
      }
    }
  }
`;

export const ListItem = styled.li`
  cursor: pointer;
  &:selected {
    background-color: rgb(87, 87, 206);
    color: #ffffff;
  }
  .activeLink {
    color: ${theme.colors.earthBrown};
  }
`;

export const HeaderNav = styled.h2`
  font-size: 2.125rem;
  padding: 0 1rem;
  a {
    color: #202121;
    text-decoration: none;
  }
`;
