import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'dva/router';
import {injectIntl} from 'react-intl'

const { Sider } = Layout;
const { SubMenu } = Menu;

class Example extends Component {
  state = {
    collapsed: false,
  };
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  componentDidMount(){
    console.log(this.props.intl);
  }
  render() {
    return (
      <div className="routerA">
        <Sider>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline"
    style={{ height: '100%', borderRight: 0 }}>
            <SubMenu
              key="questions"
              title={
                <span>
                  <Icon type="database" />
                  <span>{this.props.intl.formatMessage({id: 'router.exam'})}</span>
                </span>
              }
            >
              <Menu.Item key="1" ><Link to="/questions/add">{this.props.intl.formatMessage({id: 'router.exam.add'})}</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/questions/type">{this.props.intl.formatMessage({id: 'router.exam.classify'})}</Link></Menu.Item>
              <Menu.Item key="3"><Link to="/questions/view">{this.props.intl.formatMessage({id: 'router.exam.test'})}</Link></Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="user" />
                  <span>{this.props.intl.formatMessage({id: 'router.user'})}</span>
                </span>
              }
            >
              <Menu.Item key="4"><Link to="/questions/adduser">{this.props.intl.formatMessage({id: 'router.user.adduser'})}</Link></Menu.Item>
              <Menu.Item key="5"><Link to="/questions/viewuser">{this.props.intl.formatMessage({id: 'router.user.show'})}</Link></Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={
                <span>
                  <Icon type="profile" />
                  <span>{this.props.intl.formatMessage({id: 'router.marking'})}</span>
                </span>
              }
            >
              <Menu.Item key="7"><Link to="/questions/addexams">{this.props.intl.formatMessage({id: 'router.marking.add'})}</Link></Menu.Item>
              <Menu.Item key="8"><Link to="/questions/examlist">{this.props.intl.formatMessage({id: 'router.marking.lists'})}</Link></Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub4"
              title={
                <span>
                  <Icon type="project" />
                  <span>{this.props.intl.formatMessage({id: 'router.class'})}</span>
                </span>
              }
            >
              <Menu.Item key="9"><Link to="/questions/classManagement">{this.props.intl.formatMessage({id: 'router.class.classmanage'})}</Link></Menu.Item>
              <Menu.Item key="10"><Link to="/questions/studentManagement">{this.props.intl.formatMessage({id: 'router.class.teammanage'})}</Link></Menu.Item>
              <Menu.Item key="11"><Link to="/questions/classroomManagement">{this.props.intl.formatMessage({id: 'router.class.student'})}</Link></Menu.Item>
            </SubMenu><SubMenu
              key="sub5"
              title={
                <span>
                  <Icon type="read" />
                  <span>{this.props.intl.formatMessage({id: 'router.markings'})}</span>
                </span>
              }
            >
              <Menu.Item key="12"><Link to="/questions/classroom">{this.props.intl.formatMessage({id: 'router.markings.class'})}</Link></Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
      </div>
    )
  }
}
export default injectIntl(Example)
