import React, { Component } from 'react';
import Content from './content';
import Side from './side';

class Main extends Component {
  render() {
    return (
        <div className="row h-100">
          <div className="side col-md-2">
            <Side/>
          </div>
          <div className="main col-md-10 shadow-md">
              <Content/>
          </div>
        </div>
    );
  }
}

export default Main;
