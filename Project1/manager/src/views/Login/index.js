import React, { Component } from 'react';
import { connect } from 'dva';
import { Form, Icon, Input, Button, Checkbox ,message,notification} from 'antd';

import styles from './index.scss';

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
    let {login,user:{detail}} = this.props
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values)
        async function arr(){
            return await login({
                "user_name":values.username,
                "user_pwd":values.password
            })
        }
        arr()
        console.log(this.props)
        // push('/homeIndex')
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={styles.box}>
        <div className={styles.login}>
          <div className={styles.logins}>
            <Form onSubmit={this.handleSubmit} className="login-form">
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
                  rules: [{pattern: /^(?:(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9])).*$/, message: '密码校验失败!密码包含大小写字母、数字、特殊符号'}],
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
                <a className={styles.pwds} href="">
                  忘记密码
                </a>
                <Button type="primary" htmlType="submit" className={styles.btn}>
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
const mapStateToProps = state=>{
    console.log('state...', state);
    return state
  }
  
  const mapDisaptchToProps = dispatch=>{
    return {
      login(payload){
        dispatch({
            type: 'user/login',
            payload
        })
      }
    }
  }

export default connect(mapStateToProps,mapDisaptchToProps)(Form.create({})(IndexPage));
