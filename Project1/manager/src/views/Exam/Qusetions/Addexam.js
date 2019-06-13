import React, { Component } from 'react'
import { Input, Select } from 'antd';
import Editor from 'for-editor'
import { connect } from 'dva';
const { Option,OptGroup } = Select;

class Addexam extends Component {

    state = {
        value: '',
        value1: '',
        select1:["周考一","周考二","周考三","月考"]
    }
    render() {
        let { value, value1,select1} = this.state
        return (
            <div className="content">
                <h2 style={{ padding: '20px 0px', marginTop: "10px" }}>添加试题</h2>
                <div className="el_conent">
                    <p>题目信息</p>
                    <p>题干</p>
                    <Input size="large" placeholder="请输入题目标题，不超过20个字" value={value1} allowClear onChange={(e) => {
                        console.log(e.target.value)
                        this.setState({
                            value1: e.target.value
                        })
                    }} />
                    <p style={{ marginTop: '20px' }}>题目主题</p>
                    <Editor value={value} onChange={this.handleChange.bind(this)} />
                    <p style={{ marginTop: '20px' }}>请选择考试类型：</p>
                    <div>
                    <Select defaultValue='周考二' style={{ width: 120 }} onChange={this.select1.bind(this)}>
                        {
                        select1.map(el=>{
                            return <Option value={el} key="1">{el}</Option>
                        })
                        }
                        </Select>  
                    </div>
                </div>
            </div>
        )
    }
    select1=(value)=>{
        console.log(`selected ${value}`);
    }
    handleChange=(value)=>{
        console.log(`selected ${value}`);
    }
    componentDidMount(){
        console.log(this.props)
        this.props.examTypes()
    } 
}
const mapStateToProps = state => {
    console.log(state)
    return {...state.user}
  }
  
  const mapDisaptchToProps = dispatch => {
    return {
    examTypes() {
        dispatch({
          type: 'user/examTypes',
        })
      }
    }
  }
export default connect(mapStateToProps, mapDisaptchToProps)(Addexam);
