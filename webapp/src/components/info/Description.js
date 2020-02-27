import React, { Component } from 'react'
import { Descriptions as DescriptionAntd, Row, Col, Avatar } from 'antd'
const actual_age = new Date() - new Date()

export class Description extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (

            <DescriptionAntd>
                <DescriptionAntd.Item><h3>Pichot Gaspard</h3></DescriptionAntd.Item>
                <DescriptionAntd.Item>0669906831</DescriptionAntd.Item>
                <DescriptionAntd.Item>15 rue de la bretonnerie, 86000 Poitiers</DescriptionAntd.Item>
                <DescriptionAntd.Item><a href="mailto:gaspard@pichotg.tech">gaspard@pichotg.tech</a></DescriptionAntd.Item>
                <DescriptionAntd.Item>Né le 16/02/1998 , {actual_age} ans</DescriptionAntd.Item>
            </DescriptionAntd>
        )
    }
}

export default Description
