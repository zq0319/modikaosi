import React, { Component } from 'react'
import { Input } from 'antd';


class Addexam extends Component {
    render() {
        return (
            <div className="content">
                <h2 style={{padding: '20px 0px', marginTop: "10px"}}>添加试题</h2>
                <div className="el_conent">
                    <p>题目信息</p>
                    <p>题干</p>
                    <Input placeholder="input with clear icon" allowClear onChange={this.onChange.bind(this)} />,
                </div>
            </div>
        )
    }
    onChange = e => {
        console.log(e);
    };
}
export default Addexam
