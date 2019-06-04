import React from 'react';
import ReactDOM from 'react-dom';

import Comment from '/src/component/comment.jsx';

//  创建虚拟DOM
// const myh1 = React.createElement('h1', { title: 'mymy'}, '这是我的H1');
// const myh1 = <div>这是我的JSX H1~</div>;

const user = {
  name: 'winwin',
  age: '18',
  gender: 'man',
}

// 创建组件
class CommentList extends React.Component {
  constructor () {
    // 必须
    super();
    // 相当于vue data( return {})
    this.state = {
      msg: 'hello'
    };
  }

  show = (o) => {
    this.setState({msg: `hi${o}`});
  };
  handleChange = (e) => {
    this.setState({msg: e.target.value}, function() {
      console.log(this.state.msg)
    });
  };

  render() {
    const { name, age} = this.props;

    return <div>
      {this.state.msg}, 我的名字叫{name}，今年{age}
      <button onClick={() => this.show('!!!!')}>hit me</button>
      <input type="text" value={this.state.msg} onChange={(e) => this.handleChange(e)}/>
      </div>
  }
}

// 渲染虚拟DOM
ReactDOM.render(<Comment {...user}></Comment>, document.getElementById('app'));