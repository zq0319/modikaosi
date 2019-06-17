import React, { Component } from 'react';
import { connect } from 'dva';
import {
  Form,
  Input,
  Select,
  InputNumber,
  DatePicker,
  Button
} from 'antd';
const { Option } = Select;
const {RangePicker } = DatePicker;
class addUser extends Component {
    
    state = {
      number: {
        value: 1,
      },
      select:[],
      select2:[],
      value:''
    };
    componentDidMount(){
      console.log(this.props)
      this.props.examType()
    }
    componentWillReceiveProps(newProps){
      console.log(newProps)
      
      this.setState({
        select:newProps.detail,
        select1:newProps.getQuestionsType
      })
    }
    render() {
        let {getFieldDecorator} = this.props.form
        let {number,select,select1,value} = this.state
        return (
            <div className="content">
                <h2 style={{ padding: '20px 0px', marginTop: "10px" }}>添加考试</h2>
                <div className="el_conent">
                  <Form onSubmit={this.handleSubmit}>
                  <Form.Item label="试卷名称">
                      {getFieldDecorator('email', {
                        rules: [
                          {
                            required: true,
                            message: '请输入试卷名称',
                          },
                        ],
                      })(<Input />)}
                    </Form.Item>
                    <Form.Item label="选择考试类型">
                      {getFieldDecorator('gender', {
                        rules: [{ required: true, message: 'Please select your gender!' }],
                      })(
                        <Select
                          placeholder="Select a"
                          onChange={this.handleSelectChange}
                        >
                          {
                            select && select.map((el,i)=>{
                              return <Option key={i} value={el.exam_id}>{el.exam_name}</Option>
                            })
                          }
                        </Select>,
                      )}
                    </Form.Item>
                    <Form.Item label="选择课程">
                      {getFieldDecorator('gender', {
                        rules: [{ required: true, message: 'Please select your gender!' }],
                      })(
                        <Select
                          placeholder="Select a"
                          onChange={this.handleSelectChange}
                        >
                          {
                            select1 && select1.map((el,i)=>{
                              return <Option key={i} value={el.questions_type_id}>{el.questions_type_text}</Option>
                            })
                          }
                        </Select>,
                      )}
                    </Form.Item>
                    <Form.Item label="设置题量"
                     validateStatus={number.validateStatus}
                    >
                      
                      <InputNumber min={1} max={10} value={number.value} onChange={this.handleNumberChange} />
                    </Form.Item>
                    <Form.Item label="考试时间">
                      {getFieldDecorator('range-time-picker', [{ type: 'array', required: true, message: 'Please select time!' }])(
                        <RangePicker showTime format="YYYY-MM-DD HH:mm:ss" />,
                      )}
                    </Form.Item>
                    <Form.Item>
                      <Button type="primary" htmlType="submit">
                        创建试卷
                      </Button>
                    </Form.Item>
                  </Form>
                </div>
            </div>
        );
    }
    handleSubmit=()=>{

    }

    handleSelectChange=(value)=>{
      
    }
    
    handleNumberChange=value=>{
      console.log(value)
      this.setState({
        number: {
          value,
        },
      });
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
export default connect(mapStateToProps, mapDisaptchToProps)( Form.create({ name: 'register' })(addUser));
