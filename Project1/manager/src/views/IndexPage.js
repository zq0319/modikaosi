import React, { Component } from 'react';
import { connect } from 'dva';
import { Form, Icon, Input, Button, Checkbox ,message,notification} from 'antd';
import indexantd from "antd/dist/antd.css";
import styles from './IndexPage.scss';
import feach from '../utils/request'
class IndexPage extends Component {
  constructor(props){
    super(props)

    this.state={
      arr:{}
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    let {history:{push}} = this.props
    
    this.props.form.validateFields((err, values) => {
      if (!err) {
        
        feach("http://localhost:7001/user/login",{
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            "user_name":values.username,
            "user_pwd":values.password
          })
        }).then(res => {
          console.log(push)
          push("/homeIndex")
          if(res.code !==1 && !res.err === ""){
            message.error('登录错误',1);
          }else if(res.code*1===1){
            console.log(res)
          }

          if(res.err){
            let err = res.err
            notification.open({
              message: 'Notification Title',
              description:JSON.stringify(err),
              icon: <Icon type="smile" style={{ color: '#108ee9' }} />,
            });
          }
        })
      }else{
        return 
      }
    });
  };
  btn=()=>{
    console.log()
  }


  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={styles.box}>
        <div className={styles.login}>
          <div className={styles.logins}>
            <Form className={indexantd} onSubmit={this.handleSubmit}>
              <Form.Item>
                {getFieldDecorator('username', {
                  rules: [{ required: true, message: '请输入你的用户名!' }],
                })(
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="请输入用户名"
                  />,
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: '密码校验失败!密码包含大小写字母、数字、特殊符号' }],
                })(
                  <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="请输入密码"
                  />,
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: false,
                })(<Checkbox className={styles.pwd}>记住密码</Checkbox>)}
                <a className="login-form-forgot" className={styles.pwds} href="">
                  忘记密码
                </a>
                <Button type="primary" htmlType="submit" className={styles.btn} onClick={this.btn.bind(this)}>
                  登录
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}

IndexPage.propTypes = {};

export default connect()(Form.create({})(IndexPage));
