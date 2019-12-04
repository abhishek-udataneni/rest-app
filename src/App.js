import React from 'react';
import {connect} from "react-redux";
import {getBooksRequest} from './actions';

const App = (props) => {
    const handleClick = ()=>{
        props.getBooksRequest()
    }
    return (
        <div>
            Hello there, this is ui for the restraunt app.
        </div>
    );
}

export default connect(null,{getBooksRequest})(App);