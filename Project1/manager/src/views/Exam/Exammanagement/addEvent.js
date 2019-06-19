import React, { Component } from 'react';
import { connect } from 'dva';
class addUser extends Component {
    
    state = {
      number: {
        value: 1,
      },
      select:[],
      select2:[],
      value:'',
      seletValue: ''
    };
    
    render() {
        
        return (
            <div className="content">
                <h2 style={{ padding: '20px 0px', marginTop: "10px" }}>添加考试</h2>
                <div className="el_conent">
                  
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
  return { ...state.add }
}

const mapDisaptchToProps = dispatch => {
  return {
      examType(payload) {
          dispatch({
              type: 'add/examTypes',
              payload
          })
      }
  }
}
export default connect(mapStateToProps, mapDisaptchToProps)(addUser);
