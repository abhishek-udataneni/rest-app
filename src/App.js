import React from 'react';
import {connect} from "react-redux";
import {getBooksRequest} from './actions';

const App = (props) => {
    const handleClick = ()=>{
        props.getBooksRequest()
    }
    return (
        <div onClick={handleClick}>
            ;fdmk
        </div>
    );
}

export default connect(null,{getBooksRequest})(App);