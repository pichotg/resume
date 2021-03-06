import React, { Component } from 'react';
import styles from './Timeline.css';
import API from '../../utils/API'
import { Timeline as TimelineAntd, Tag, Select, Row, Col, message } from 'antd';
const error = (err) => {
  message.destroy()
  message.error(err);
};
export class Timeline extends Component {
  state = {
    experience_item: [],
    formation_item: []
  };
  renderTags(tags) {
    if (tags) {
      const liste_tags = tags.map((tag) =>
        <Tag color="red">
          {tag}
        </Tag>
      )
      return liste_tags
    }
  };

  renderProgrammes(programme) {
    if (programme) {
      return (
        <Select defaultValue="Programme" style={{ width: 300 }}>
          {programme.map(item => (
            <Select.Option key={item}>{item}</Select.Option>
          ))}

        </Select>
      );
    }
  }
  messageError(err) {
    message.info(err)
  }

  render() {
    const experience_item = this.state.experience_item.map((experience) =>
      <TimelineAntd.Item color="red">
        {experience.periode}
        <h3>{experience.poste}</h3>
        <h4>{experience.entreprise}</h4>
        <p>{experience.description}</p>
        <p>{experience.adresse}</p>
        {this.renderTags(experience.tags)}
      </TimelineAntd.Item>
    );

    const formation_item = this.state.formation_item.map((formation, i) =>
      <TimelineAntd.Item color="red">
        {formation.periode}
        <h3>{formation.formation}</h3>
        <h4>{formation.detail}</h4>
        {formation.adresse}
        <p>
          {formation.description}
        </p>
        {this.renderTags(formation.tags)}
        {this.renderProgrammes(formation.programme)}
      </TimelineAntd.Item>
    );

    return (
      <div className={styles.Timeline} data-testid="Timeline">
        <Row gutter={[16, 32]} type="flex" justify="space-between" align="top">
          <Col span={11}>
            <h2 style={{ textAlign: "center" }}>Expericences</h2>
          </Col>
          <Col span={11}>
            <h2 style={{ textAlign: "center" }}>Formations</h2>
          </Col>
        </Row>
        <Row gutter={[16, 32]} type="flex" justify="space-between" align="top" >
          <Col span={11}>
            <TimelineAntd
              reverse={true}
              mode="right"
            >
              {experience_item}
            </TimelineAntd>
          </Col>
          <Col span={11}>
            <TimelineAntd
            >
              {formation_item}
            </TimelineAntd>
          </Col>
        </Row>
      </div>
    )
  };

  componentDidMount() {
    API.get('/experiences')
      .then(response => this.setState({ experience_item: response.data }))
      .catch(err => error(err.toString()));

    API.get('/formations')
      .then(response => this.setState({ formation_item: response.data }))
      .catch(err => error(err.toString()));
  }

};
export default Timeline;