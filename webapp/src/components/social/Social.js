import React, { Component } from "react";
import { Button , Icon} from 'antd'

export class Social extends Component {
    render() {
        return (
            <div>
                <div style={{ textAlign: 'center' }}>
                    <Button size="large" href="https://github.com/pichotg" >
                        github.com/pichotg<Icon type="github" />
                    </Button>
                </div>
            </div>
        )
    }
}