import React , { Component }from 'react';
import { connect } from 'dva';
import "antd/dist/antd.css";
import details from "./detail.css"
import { Menu, Icon,Layout,Avatar,Dropdown } from 'antd';
const { Header,Sider, Content } = Layout;
const { SubMenu }  = Menu;

class detail extends Component {
    render() {
        return (
            <div className={details.box}>
                <Header className={details.header}>
                    <div className={details.hleft}>
                        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" alt="" className={details.img}/>
                    </div>
                    <div className={details.hright}>
                    <Menu>
                        {/* <Menu.Item>
                        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                            1st menu item
                        </a>
                        </Menu.Item>
                        <Menu.Item>
                        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                            2nd menu item
                        </a>
                        </Menu.Item>
                        <Menu.Item>
                        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                            3rd menu item
                        </a>
                        </Menu.Item> */}
                    </Menu>
                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"className={details.imgs}/>
                    </div>
                </Header>
                <Layout className={details.left}>
                    <Sider className={details.lefts}>
                        <Menu mode="inline" theme="dark">
                            <SubMenu key="sub1" title={<span> <Icon type="mail" /><span>试题管理</span></span>}>
                                <Menu.Item key="1">添加试题</Menu.Item>
                                <Menu.Item key="2">试题分类</Menu.Item>
                                <Menu.Item key="3">查看试题</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>用户管理</span></span>}>
                                <Menu.Item key="4">添加用户</Menu.Item>
                                <Menu.Item key="5">用户展示</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub3" title={<span><Icon type="setting" /><span>考试管理</span> </span>}>
                                <Menu.Item key="6">添加考试</Menu.Item>
                                <Menu.Item key="7">试卷列表</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub4" title={<span><Icon type="setting" /><span>班级管理</span> </span>}>
                                <Menu.Item key="8">班级管理</Menu.Item>
                                <Menu.Item key="9">教室管理</Menu.Item>
                                 <Menu.Item key="10">学生管理</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub5" title={<span><Icon type="setting" /><span>班级管理</span></span>}>
                                <Menu.Item key="11">待批班级</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Content  className={details.cenner}>内容</Content>
                </Layout>
            </div>
        );
    }
}
detail.propTypes = {};

export default connect()(detail);


