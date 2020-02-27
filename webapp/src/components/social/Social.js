import React, { Component } from "react";
import { Button, Icon } from 'antd'


export class Social extends Component {
    render() {
        return (
            <div>
                <div style={{ textAlign: 'center'}}>
                    <Button style={{ margin: 20}} size="large" href="https://github.com/pichotg" >
                        github.com/pichotg<Icon type="github" theme="filled" />
                    </Button>

                    <Button style={{ margin: 20}} size="large" href="https://www.linkedin.com/in/gaspard-pichot-4bab75150" >
                        linkedin<Icon type="linkedin" theme="filled" />
                    </Button>
                </div>
            </div>
        )
    }
}