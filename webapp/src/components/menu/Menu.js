import React, { Component } from 'react'
import { Menu as MenuAntd, Icon } from 'antd';

export class Menu extends Component {
    state = {
        current: 'mail',
      };
    
      handleClick = e => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
      };
    
      render() {
        return (
          <MenuAntd onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
            
            <MenuAntd.Item key="mail">
              <Icon type="mail" />
              Contacter Moi
            </MenuAntd.Item>
    
            <MenuAntd.Item key="app" disabled>
              <Icon type="appstore" />
              Navigation Two
            </MenuAntd.Item>
          </MenuAntd>
        );
      }
}


