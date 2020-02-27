import React, { Component } from "react";
import "./Tech.css"
import API from '../../utils/API'

export class Tech extends Component {
    state = {
        technologies: []
    };

    componentDidMount() {
        API.get('/technologies')
            .then(response => this.setState({ technologies: response.data }))
            .catch(err => console.error(err));
    }

    render() {
        const technologies = this.state.technologies.map((technology, i) =>
            <li key={i}>
                <b>{technology.name}</b>: {technology.details}
            </li>
        );
        return (
            <ul className="technologies">
                {technologies}
            </ul>
        );
    }
}
