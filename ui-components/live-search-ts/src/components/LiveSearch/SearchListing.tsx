import React from 'react';

import ListItem from './ListItem';
import styles from './SearchListing.module.scss';

interface Props {
  results: [];
  handleClick: () => any;
  children?: any;
}

const SearchListing = (props: any) => {
  const { results, children, handleClick } = props;
  let cards = <h3>Loading...</h3>;

  cards = results?.map((item: any, ind: any) => (
    <ListItem
      key={ind}
      item={item}
      children={children}
      handleClick={handleClick}
    />
  ));

  return (
    <div className={styles.Container}>
      <div className={styles.containerInner}>{cards}</div>
    </div>
  );
};

export default SearchListing;
