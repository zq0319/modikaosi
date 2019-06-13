import React, { Component } from 'react';
import { connect } from 'dva';

class Viewexam extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

Viewexam.propTypes = {

}
// props的默认值
Viewexam.defaultProps = {

}

const mapStateToProps = state => {
    console.log('state...', state);
    return {
        ...state.user
    }
}

const mapDisaptchToProps = dispatch => {
    return {
        type() {

            dispatch({
                type: 'user/view'
            })
        }
    }
}

export default connect(mapStateToProps, mapDisaptchToProps)(Viewexam)