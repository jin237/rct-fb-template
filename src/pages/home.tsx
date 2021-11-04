import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Container } from 'reactstrap';
import IPageProps from '../interfaces/page';

import { LinePlot } from './contents/LinePlot';
import { PiePlot } from './contents/PiePlot';
import { BarPlot } from './contents/BarPlot';
//import { Chart } from './contents/ApexChart';

const HomePage: React.FunctionComponent<IPageProps> = props => {
    return (
        <div className="App">
            <Container>
                <Card className='bg-white text-dark'>
                    <CardBody>
                        <PiePlot />
                    </CardBody>
                    <CardBody>
                        <BarPlot />
                    </CardBody>
                    {/* <CardBody>
                        <ApexChart />
                    </CardBody> */}
                </Card>
                <Card className='bg-white text-dark'>
                    <CardBody>
                        <p>
                            Welcome to this page that is protected by Friebase auth!
                        </p>
                        <p>
                            Change your password <Link to="/change">here</Link>.
                        </p>
                        <p>
                            Click <Link to='/logout'>here</Link> to logout.
                        </p>
                    </CardBody>
                </Card>
            </Container>
        </div>
    );
}

export default HomePage;