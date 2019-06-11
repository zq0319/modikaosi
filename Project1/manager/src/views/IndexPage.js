import React, { Component } from 'react';
import { connect } from 'dva';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import "antd/dist/antd.css";
import styles from './IndexPage.css';
class IndexPage extends Component {
    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
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
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="请输入用户名"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
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
              initialValue: true,
            })(<Checkbox  className={styles.pwd}>记住密码</Checkbox>)}
            <a  href=""  className={styles.pwds}>
              忘记密码
            </a>
            <Button type="primary" htmlType="submit"className={styles.btn} onClick={this.btn.bind(this)}>
              登录
            </Button>
          </Form.Item>
        </Form>
        </div>
        </div>
        </div>
      );
    }
    btn=()=>{
        this.props.history.push("/detail")
    }
  }

IndexPage.propTypes = {};

export default connect()(Form.create({})(IndexPage));

