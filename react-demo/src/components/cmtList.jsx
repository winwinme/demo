import React from 'react';
import CmtItem from '@/components/CmtItem';
import CmtBox from '@/components/CmtBox';
import styles from '@/css/index.scss';

export default class CmtList extends React.Component {

  // 列表页
  constructor() {
    super();
    this.state = {
      commentList: [],
    };
  }

  componentWillMount() {
    this.getList();
  }


  getList = () => {
    // 拿到本地存储
    const commentList = JSON.parse(localStorage.getItem('cmtList') || '[]');
    // setState
    this.setState({
      commentList
    })
  };

  render() {
    return <div>
      <h1 className={styles.title}>评论列表页</h1>
      <CmtBox refresh={this.getList}></CmtBox>
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

