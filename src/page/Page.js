import React from 'react';
import { connect } from 'react-redux';
import { changeVal } from './actions'

const Page = ({val, changeVal}) => <div>
    <h1>Page section</h1>
    <input value={val} onChange={changeVal}/>
</div>;

export default connect(state => ({
    val: state.page.val
}), { changeVal })(Page)


