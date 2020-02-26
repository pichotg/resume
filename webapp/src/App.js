import { Layout, Descriptions, Divider } from 'antd';
import React, { Component } from 'react';
import './App.css';
import { TimeLine } from './components/timeline/Timeline';
import { Social } from './components/social/Social';
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
                        <Social />
                        <TimeLine />
                    </Content>
                    <Divider />
                    <Footer style={{ textAlign: 'center' }}>
                        <Descriptions>
                            <Descriptions.Item label="Name">Pichot Gaspard</Descriptions.Item>
                            <Descriptions.Item label="Telephone">0669906831</Descriptions.Item>
                            <Descriptions.Item label="Address">
                                15 rue de la bretonnerie, 86000 Poitiers
                            </Descriptions.Item>
                            <Descriptions.Item label="Mail">
                                pichot.gaspard86@gmail.com
                            </Descriptions.Item>
                        </Descriptions>
                    </Footer>
                </Layout>
            </div>
        )
    };
}
export default App;