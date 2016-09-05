import Navigation from './Navigation';
import React, { PropTypes } from 'react';
import { locationShape } from 'react-router';

class App extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        <Navigation />
        {children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
};

export default App;

