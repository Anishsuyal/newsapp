import React, { Component } from 'react';
import Newsitem from './Newsitem';

export class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h2>This is News Component</h2>
        <div className="row">
          <div className="col-md-4">
              <Newsitem title="My Title 1" discription="My Description 1" />
              
          </div>
          <div className="col-md-4">
              <Newsitem title="My Title 1" discription="My Description 1" />
              
          </div>
          <div className="col-md-4">
              <Newsitem title="My Title 1" discription="My Description 1" />
              
          </div>
        </div>
        
      </div>
    );
  }
}

export default News;
