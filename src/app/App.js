import Navigation from './Navigation';
import React, { PropTypes } from 'react';
import { locationShape } from 'react-router';

class App extends React.Component {
  render() {
    const { location, children } = this.props;

    return (
      <div>
        <Navigation />
        {children}
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.object.isRequired,
  location: locationShape,
};

export default App;

