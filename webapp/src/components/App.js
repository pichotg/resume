import GLOBE from 'vanta/dist/vanta.globe.min.js'
import { Layout, Divider, Button, Icon, Menu, Row, Col, Descriptions } from 'antd';
import React, { Component } from 'react';
import '../styles/App.scss';
import { Timeline } from './timeline/Timeline';
import { Description } from "./info/Description";
import { Tech } from './tech/Tech'

const { Footer, Content, Header } = Layout;
const menu = (
    <Menu
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }}
    >
        <Menu.Item style={{ float: "right" }} ><Icon type="github" />github</Menu.Item>
        <Menu.Item style={{ float: "right" }} ><Icon type="linkedin" />linkedin</Menu.Item>
        <Menu.Item style={{ float: "right" }} key="1"><Icon type="file" />Résumé</Menu.Item>
        <Menu.Item style={{ float: "right" }} key="2"><Icon type="book" />Portfolio</Menu.Item>
        <Menu.Item style={{ float: "right" }} key="3"><Icon type="mail" />Contacter moi</Menu.Item>
        <Menu.Item style={{ float: "right" }} key="4"><Icon type="blog" />Blog</Menu.Item>
    </Menu>
);
export class App extends Component {
    constructor() {
        super()
        this.vantaRef = React.createRef()
    }

    componentDidMount() {
        this.vantaEffect = GLOBE({
            el: this.vantaRef.current,
            mouseControls: true,
            touchControls: true,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            size: 2.0
        })
    }
    componentWillUnmount() {
        if (this.vantaEffect) this.vantaEffect.destroy()
    }

    render() {
        return (
            <div className="app">
                <Layout>
                    <Header style={{ background: '#fff' }}>
                        {menu}
                    </Header>
                    <Content>
                        <div className="heading" ref={this.vantaRef}>
                            <div>
                                <h1>Pichot Gaspard</h1>
                                <h3>Développeur full-stack</h3>
                            </div>
                        </div>

                        <div style={{ padding: '50px' }}>
                            <Description />
                            <Divider />
                            <Timeline />
                        </div>
                    </Content>
                    <Divider />
                    <Footer >
                        <Row gutter={[16, 16]}>
                            <Col span={12} >
                                <Description />
                            </Col>
                            <Col span={12} >
                                <div style={{ textAlign: "center", display: "grid" }}>
                                    <h4>Created with :</h4>
                                    <Button type="dashed" size="default" href="https://github.com/pichotg/resume" style={{ marginLeft: 40 }}>
                                        <Icon type="github" /> github.com/pichotg/resume
                                </Button>
                                </div>

                                <Tech />
                            </Col>
                        </Row>
                        <Divider />
                        <div style={{ textAlign: "center" }}>Created by Pichot Gaspard</div>
                    </Footer>
                </Layout>
            </div >
        )
    };
}
export default App;