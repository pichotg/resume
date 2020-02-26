import React, { Component } from "react";
import axios from "axios";
import { Statistic, Timeline as TimelineAntd, List, Collapse, Icon } from 'antd';
const { Countdown } = Statistic;

const deadline = new Date(2020, 7, 3);
const countdown = <Countdown title="day left" value={deadline} format="DD"></Countdown>

export class TimeLine extends Component {
    state = {
        timelineElements: []
    };
    isPresent(bool) { if (bool) return countdown }

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
                timelineElements: resp.data
            }));
    }

    render() {
        const timelineElements = this.state.timelineElements.map((element, i) =>
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
                    {timelineElements}
                </TimelineAntd>
            </div>
        );
    }
}
