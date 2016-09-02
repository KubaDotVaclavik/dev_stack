import React from 'react';
import { connect } from 'react-redux';
import { fetchPlanets } from './actions'

const Page = ({fetchPlanets}) => <div>
    <h1>Page section</h1>
    <input type='button' value='Tlačitko na SW api' onClick={fetchPlanets}/>
</div>;

export default connect(null, { fetchPlanets })(Page)


