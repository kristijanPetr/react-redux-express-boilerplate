import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logUser } from '../../actions';

import './index.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false
    };
  }
  componentWillMount = () => {
    this.props.logUser('Test User');
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>React Express Boilerplate with preinstalled:</p>

          <ul>
            <li className="app-link">1. Redux</li>
            <li className="app-link">2. Redux Thunk</li>
            <li className="app-link">3. Redux Logger</li>
            <li className="app-link">4. React Router Dom</li>
            <li className="app-link">5. Axios</li>
          </ul>
        </header>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.user
  };
};
export default connect(
  mapStateToProps,
  { logUser }
)(Main);
