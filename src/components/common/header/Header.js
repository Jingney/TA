import React from 'react';
import './header.less';

class Header extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {

    };
  }
  render = () => (
    <div className="header">
      <h1>TA</h1>
      <ul className="header-nav">
        <li>项目管理</li>
        <li>应用管理</li>
        <li>模块管理</li>
        <li>接口管理</li>
        <li>权限管理</li>
        <li>用户管理</li>
      </ul>
    </div>
    )
}
export default Header;