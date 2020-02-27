import { Layout, Descriptions, Divider } from 'antd';
import React, { Component } from 'react';
import '../styles/App.css';
import { Timeline } from './timeline/Timeline';
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
                        <Social />
                        <Divider />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed tempor lorem, malesuada porta nunc. Suspendisse risus nunc, viverra a justo vel, malesuada efficitur ipsum. Nulla sollicitudin risus dui, vitae eleifend neque sagittis vel. Nunc in scelerisque turpis. Maecenas et ante orci. Praesent aliquet sem ac leo tristique, accumsan elementum nunc fringilla. Cras eleifend orci tortor, in aliquam nibh laoreet sed.

                            Praesent consectetur neque ac velit dignissim maximus. Pellentesque gravida purus dolor, quis accumsan mauris viverra sed. Etiam aliquet posuere velit ultrices elementum. In fermentum suscipit nisi, eget iaculis elit pretium at. Curabitur ut dui pretium, fringilla mi vitae, vehicula elit. Phasellus pulvinar dui vel libero hendrerit efficitur sit amet eget mi. Curabitur id est vel turpis interdum tincidunt a ut mauris. Fusce eu auctor justo. Nunc sit amet elementum tellus. Vivamus porttitor risus nisi, sed gravida ex lobortis ut. Proin in vulputate nisl, eget dapibus diam. Cras porta orci facilisis quam vulputate ultricies. Suspendisse potenti. Nulla hendrerit ornare libero, venenatis tincidunt nisl auctor eget. Nam ac efficitur lorem.

                            Nulla et lectus aliquam, dictum urna sed, iaculis mi. Integer convallis diam ut lacus tempus, sed ultrices ex rhoncus. Nullam auctor interdum eros egestas pharetra. Duis convallis, ligula ac fringilla malesuada, leo enim hendrerit ligula, et lacinia lacus magna quis nibh. Nullam felis leo, congue ut ullamcorper gravida, fermentum ac purus. Nam porttitor sit amet mauris in tincidunt. Sed at erat dolor. Donec ac vulputate augue, sit amet rhoncus ligula. Etiam semper porttitor ex. Proin interdum pellentesque urna, a aliquet odio pharetra nec.

                            Nulla eu neque sed neque rutrum aliquet. Suspendisse eleifend nunc ac nulla viverra, vitae finibus risus condimentum. Sed bibendum, velit vitae vestibulum iaculis, justo augue ultrices est, vitae suscipit neque quam id erat. Donec volutpat, elit at congue facilisis, libero ipsum scelerisque urna, non dictum ante felis eget augue. Mauris tristique ante at nisi convallis rutrum. Proin tincidunt enim magna, quis tempor ipsum sagittis non. Aliquam congue mollis quam, sed tempus lorem tincidunt rutrum. Nunc non convallis libero.

                            Aliquam tincidunt, diam non consectetur tincidunt, nulla quam vulputate risus, vitae volutpat ipsum nisi at sem. Curabitur mollis orci sem, dapibus dictum augue tincidunt vel. Fusce tincidunt molestie lorem eu porttitor. Etiam dictum semper ex ullamcorper blandit. Donec rutrum ultrices sapien vitae feugiat. Maecenas quis lobortis orci, eu laoreet mauris. Sed vel metus sapien. Proin accumsan feugiat mauris, ut malesuada nisl cursus non. Phasellus eget ullamcorper lectus. Integer ac vehicula lorem. Morbi vel lectus enim. Nullam consequat libero et orci semper consequat. Suspendisse eu volutpat ipsum. Sed euismod lacus sed sapien tempor, eget posuere ligula placerat.
</p>
                        <Divider />

                        <Timeline />
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