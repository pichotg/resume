import { Layout, Divider, Button, Icon } from 'antd';
import React, { Component } from 'react';
import '../styles/App.css';
import { Timeline } from './timeline/Timeline';
import { Description } from "./info/Description";
import { Social } from './social/Social';
const { Footer, Content } = Layout;

export class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="app">
                <Layout>
                    <Content style={{ padding: '50px' }}>
                        <h1>Pichot Gaspard</h1>
                        <Social />
                        <Divider />
                        <Description />

                        <Divider />

                        <Timeline />
                    </Content>
           
                    <Footer style={{ textAlign: 'center' }}>Created by Pichot Gaspard 

                    <Button style={{margin : 20}}  type="dashed" size="default" href="https://github.com/pichotg/resume" >
                            <Icon type="github"/> github.com/pichotg/resume
                    </Button>

                    </Footer>
                </Layout>
            </div>
        )
    };
}
export default App;