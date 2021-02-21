import React from 'react';
import { Characters } from '../../../models/Characters';
import {
  BoxInfo,
  BoxInfoContent,
  AppItem,
  Tags,
  BoxFooter,
  FooterItemList,
  FooterList,
} from './styles';

interface Props {
  item: Characters;
}

const ItemList: React.FC<Props> = ({ item }: Props) => {
  return item ? (
    <li data-testid="item-list">
      <AppItem>
        <BoxInfo>
          <BoxInfoContent>
            <div>
              <h1>{item.name}</h1>
              <span>Titles:</span>
              <p>{item.titles?.join(' , ')}</p>
              <span>Also known as:</span>
              <p>{item.aliases?.join(' , ')}</p>
            </div>
            <Tags data-testid="tags-categories">
              {item.culture?.join(' / ')}
            </Tags>
          </BoxInfoContent>
          <BoxFooter>
            <FooterList>
              <FooterItemList>
                <h3>Gender:</h3>
                <span>{item.gender}</span>
              </FooterItemList>
              <FooterItemList>
                <h3>Born:</h3>
                <span>{item.born}</span>
              </FooterItemList>
              <FooterItemList>
                <h3>Died:</h3>
                <span>{item.died}</span>
              </FooterItemList>
            </FooterList>
          </BoxFooter>
        </BoxInfo>
      </AppItem>
    </li>
  ) : null;
};

export default ItemList;
