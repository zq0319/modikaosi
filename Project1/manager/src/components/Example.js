import React from 'react';
import { Layout, Menu, Icon} from 'antd';
const { SubMenu } = Menu;
const { Sider } = Layout;
const Example = () => {
  return (
      <Sider width={200}  style={{ background: '#fff' }}>
                <Menu mode="inline" theme="dark" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} style={{ height: '100%', borderRight: 0 }}>
                <SubMenu key="sub1"title={<span><Icon type="user" />试题管理</span>}>
                    <Menu.Item key="1">添加试题</Menu.Item>
                    <Menu.Item key="2">试题分类</Menu.Item>
                    <Menu.Item key="3">查看试题</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2"title={<span><Icon type="laptop" />用户管理</span>}>
                    <Menu.Item key="4">添加用户</Menu.Item>
                    <Menu.Item key="5">用户展示</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3"title={<span><Icon type="notification" />考试管理</span>}>
                    <Menu.Item key="6">添加考试</Menu.Item>
                    <Menu.Item key="7">试卷列表</Menu.Item>
                </SubMenu>
                <SubMenu key="sub4"title={<span><Icon type="notification" />班级管理</span>}>
                    <Menu.Item key="8">班级管理</Menu.Item>
                    <Menu.Item key="9">教室管理</Menu.Item>
                    <Menu.Item key="10">学生管理</Menu.Item>
                </SubMenu>
                <SubMenu key="sub5"title={<span><Icon type="notification" />阅卷管理</span>}>
                    <Menu.Item key="11">待批班级</Menu.Item>
                </SubMenu>
                </Menu>
            </Sider>
  );
};

Example.propTypes = {
};

export default Example;
