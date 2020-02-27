import React, { Component } from "react";
import axios from "axios";
import { Timeline as TimelineAntd, List, Collapse, Icon } from 'antd';


class Formation extends Component {
    state = {
        timeline_item: []
    };

    getProgramme(listdata) {
        if (listdata) {
            return (
                <Collapse bordered={false}>
                    <Collapse.Panel header="Programme" extra={<Icon type="book" />}>
                        <div style={{ textAlign : "left" }}>
                            <List
                                size="small"
                                dataSource={listdata}
                                renderItem={item => (
                                    <List.Item>
                                        {item}
                                    </List.Item>
                                )}
                            />
                        </div>
                    </Collapse.Panel>
                </Collapse>
            );
        }
    }
    
    componentDidMount() {
        axios.get(`${process.env.REACT_APP_API_URL}/api/timelines`)
            .then(resp => this.setState({
                timeline_item: resp.data
            }));
    }

    render() {
        const timeline_item = this.state.timeline_item.map((element, i) =>
            <TimelineAntd.Item>
                {element.periode}
                <h3>{element.title}</h3>
                <h4>{element.subtitle}</h4>
                {this.isPresent(element.now)}
                {this.getProgramme(element.programme)}
                <p>
                    {element.description}
                </p>
            </TimelineAntd.Item>
        );

        return (
            <div style={{ maxWidth: 600 }}>
                <TimelineAntd
                    mode="alternate"
                    reverse={true}
                >
                    {timeline_item}
                </TimelineAntd>
            </div>
        );
    }
}
