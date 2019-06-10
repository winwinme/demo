import React from 'react';

export default class  extends React.Component {

  // 列表页
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
  }

  componentDidMount() {
    console.log('router id', this.props.match.params.id)
  }

  render() {
    return <div>
      MOVIE
    </div>;
  }
}

