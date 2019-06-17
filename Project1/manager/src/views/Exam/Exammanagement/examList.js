import React, { Component } from 'react';
import { Tabs, Input, Button, Select } from 'antd';
const { TabPane } = Tabs;
const { Option } = Select;
const provinceData = ['Zhejiang', 'Jiangsu'];
const cityData = {
  Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
  Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
};
console.log(cityData[provinceData[0]],cityData[provinceData[1]])
class addUser extends Component {
        state = {
        cities: cityData[provinceData[0]],
        secondCity: cityData[provinceData[1]],
      };
    
      handleProvinceChange = value => {
        this.setState({
          cities: cityData[value],
          secondCity: cityData[value][0],
        });
      };
    
      onSecondCityChange = value => {
        this.setState({
          secondCity: value,
        });
      };

    constructor(props) {
        super(props);
        this.state = {
            mode: 'top',
        };
    }
    handleModeChange = e => {
        const mode = e.target.value;
        this.setState({ mode });
    };

    render() {
        let { cities } = this.state;
        console.log(this.state)
        return (
            <div className="box">
                <h2 style={{ padding: '20px 0px', marginTop: "10px" }}>添加用户</h2>
            </div>
        );
    }
}
// ReactDOM.render(<App />, addUser);

export default addUser;
