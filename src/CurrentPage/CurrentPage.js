import React, { Component } from 'react';
import './CurrentPage.css';
import { connect } from 'react-redux';

class CurrentPage extends Component {
  render() {
    return (
      <div>
        <div>
            {this.props.currentPageReducer.currentPage}
        </div>
      </div >
    );
  }
}

export default connect((state) => (state))(CurrentPage);