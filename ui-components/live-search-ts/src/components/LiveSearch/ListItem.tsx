import React from 'react';

import styles from './ListItem.module.scss';

const ListItem = (props: any) => {
  const { title } = props.item;

  return (
    <div className={styles.container}>
      <div className={styles.bottom}>
        <h3 className={styles.title}>{title}</h3>
      </div>
    </div>
  );
};

export default ListItem;
