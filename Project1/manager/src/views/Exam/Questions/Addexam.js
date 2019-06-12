import React, { Component } from 'react'
import { Input, Select } from 'antd';
import Editor from 'for-editor'
const { Option,OptGroup } = Select;
class Addexam extends Component {

    state = {
        value: '',
        value1: ''
    }
    render() {
        let { value, value1 } = this.state
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
                    <Select defaultValue="lucy" style={{ width: 200 }} onChange={this.select1.bind(this)}>
                        <OptGroup label="Manager">
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        </OptGroup>
                        <OptGroup label="Engineer">
                        <Option value="Yiminghe">yiminghe</Option>
                        </OptGroup>
                    </Select>
                    {/* <Select defaultValue='周考二' style={{ width: 120 }} onChange={this.select1.bind(this)}>
                        <Option value="zk1">周考一</Option>
                        <Option value="zk2">周考二</Option>
                        <Option value="zk3">周考三</Option>
                        <Option value="yuekao">月考</Option>
                    </Select> */}
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
      
}
export default Addexam
