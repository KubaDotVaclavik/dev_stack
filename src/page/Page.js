import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPlanets } from './actions';

const Page = ({ fetchPlanets }) => <div>
    <h1>Page section</h1>
    <input type="button" value="Tlačitko na SW api" onClick={fetchPlanets} />
</div>;

Page.propTypes = {
  fetchPlanets: PropTypes.func.isRequired,
};

export default connect(null, { fetchPlanets })(Page);

