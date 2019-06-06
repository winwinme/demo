import React from 'react';
import styles from '@/css/index.scss';

export default class CmtBox extends React.Component{

  postComment = () => {
    const { refs: { user, content }, props: { refresh }
    } = this;
    // 1.拿到评论信息
    const newItem = {user: user.value, content: content.value};

    // 2.拿到本地储存最新list，unshit进去
    const list = JSON.parse(localStorage.getItem('cmtList') || '[]');
    list.unshift(newItem);
    // console.log(list)

    // 3.set 本地存储
    localStorage.setItem('cmtList', JSON.stringify(list));

    // 4.清空输入框
    user.value = content.value = '';

    // 5.更新列表（父级方法）
    refresh();
  };

  render() {
    return(<div className={styles.cmtWrap}>
      <p><input type="text" ref="user"/></p>
      <p><textarea ref="content"/></p>
      <p><button className={ styles.btn } onClick={this.postComment}>评论</button></p>
    </div>);
  }
}
