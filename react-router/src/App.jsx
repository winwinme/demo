import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from '@/components/Home';
import Movie from '@/components/Movie';
import About from '@/components/About';
import { Menu } from 'antd';


export default class App extends React.Component {

  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return <Router>
      <h4>React路由</h4>
      <div>
        <Menu>
          <Menu.Item><Link to="/">首页</Link></Menu.Item>
          <Menu.Item><Link to="/movie/top10/11">电影</Link></Menu.Item>
          <Menu.Item><Link to="/about">关于</Link></Menu.Item>
        </Menu>
        <hr />
        <Route path="/" component={Home} exact/>
        <Route path="/movie/:type/:id" component={Movie} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  }
}