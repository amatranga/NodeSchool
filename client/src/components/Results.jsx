import React from 'react';
import Picture from './Picture';

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        Map over Picture Components here!
        <Picture />
      </div>
    );
  }
}

export default Results;
