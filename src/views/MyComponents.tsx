import React from 'react';
import styles from './styles.module.css';
import Test from './test';

const MyComponent = () => (
    <div className={styles.example}>
      <Test></Test>
        Hello, world!
    </div>
);

export default MyComponent;
