import React, { Component } from 'react'
import { connect } from 'dva';
import { Radio,Select ,Button } from 'antd';
import ViewComponent from '@/components/ViewComponent'
const { Option } = Select;

 class Viewexam extends Component {
    state={
        detail:[],
        subject:[],
        getQuestionsType:[],
    }
    componentDidMount(){
        this.props.examType()
    }
    componentWillReceiveProps(newProps){
        console.log(newProps)
    }
    render() {
        let {subject,detail,getQuestionsType} = this.props
        return (
            <div className="content">
                <h2 style={{ padding: '20px 0px', marginTop: "10px" }}>查看试题</h2>
                <div className="el_conent">
                    <div>
                        <span>课程类型：</span>
                        <Radio.Group defaultValue="a" buttonStyle="solid">
                        <Radio.Button value="all">all</Radio.Button>
                            {
                                subject && subject.map((el,i)=>{
                                    return <Radio.Button key={i} value={el.subject_text}>{el.subject_text}</Radio.Button>
                                })
                            }
                        </Radio.Group>
                        <div className="el-Button">
                        <Select defaultValue='周考二' style={{ width: 120 }} onChange={this.select1.bind(this)}>
                            {
                            detail && detail.map((el,i)=>{
                                return <Option key={i} value={el.exam_name}>{el.exam_name}</Option>
                            })
                            }
                        </Select> 
                            <Select defaultValue='' style={{ width: 120 }} onChange={this.select1.bind(this)}>
                            {
                            getQuestionsType && getQuestionsType.map((el,i)=>{
                                return <Option key={i} value={el.questions_type_text}>{el.questions_type_text}</Option>
                            })
                            }
                        </Select>
                        <Button type="primary" icon="search">搜索</Button>  
                        </div>
                    </div>
                </div>
                <div className="el_conent">
                    <ViewComponent/>
                </div>
            </div>
        )
    }
    
    select1=(value)=>{
        console.log(`selected ${value}`);
    }
}
const mapStateToProps = state => {
    return {...state.add}
}
  
const mapDisaptchToProps = dispatch => {
    return {
    examType() {
        dispatch({
          type: 'add/examTypes',
        })
      }
    }
  }
export default connect(mapStateToProps,mapDisaptchToProps)(Viewexam)