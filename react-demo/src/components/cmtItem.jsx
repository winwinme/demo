import React from 'react';
import styles from '../css/index.scss';

// 评论项
export default function CmtItem({user, content}) {
  return(<li>
    <span className={styles.title}>用户：{ user }</span>
    <div>内容：{ content }</div>
  </li>);
}