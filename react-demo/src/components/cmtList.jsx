import React from 'react';
import CmtItem from '@/components/cmtItem';
import styles from '../css/index.scss';

export default class CmtList extends React.Component {

  // 列表页
  constructor() {
    super();
    this.state = {
      commentList: [
        { user: '李白', content: '床前明月光', id: '11' },
        { user: '小白', content: '只是一只狗', id: '22' },
        { user: '小李子', content: '陛下饶命啊', id: '33' },
      ],
    };
  }

  render() {
    return <div>
      <h1 className={styles.title}>评论列表页</h1>
      <hr/>
      <ul className={styles.list}>
        { this.state.commentList.map((item, index) => {
          return (<CmtItem {...item} key={ index }></CmtItem>);
        })
        }
      </ul>
    </div>
  }
}

