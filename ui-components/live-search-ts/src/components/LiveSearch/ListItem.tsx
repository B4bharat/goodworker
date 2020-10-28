import React from 'react';

import styles from './ListItem.module.scss';

const ListItem = (props: any) => {
  const { item, children, handleClick } = props;

  return (
    <div className={styles.bottom} onClick={handleClick}>
      {children}
      <h3 className={styles.title}>{item.title}</h3>
    </div>
  );
};

export default ListItem;
