import React from 'react';

import ListItem from './ListItem';
import styles from './SearchListing.module.scss';

const SearchListing = (props: any) => {
  let cards = <h3>Loading...</h3>;

  cards = props.results?.map((item: any, ind: any) => (
    <ListItem key={ind} item={item} />
  ));

  return (
    <div className={styles.Container}>
      <div className={styles.containerInner}>{cards}</div>
    </div>
  );
};

export default SearchListing;
