import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, discription } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img src="https://ichef.bbci.co.uk/ace/branded_sport/1200/cpsprodpb/e6ee/live/e7d60c30-50db-11f0-a466-d54f65b60deb.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {discription}
            </p>
            <a href="/newdetails" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
