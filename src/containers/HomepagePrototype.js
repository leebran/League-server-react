import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import LeagueNameService from "../services/LeagueNameService";
import DatabaseService from "../services/DatabaseService";

export default class HomepagePrototype extends React.Component {
    constructor(props) {
        super(props)
        this.LeagueNameService = new LeagueNameService();
        this.DatabaseService = new DatabaseService();
        this.state = {gameState: []}
    }

    componentDidMount() {
        this.LeagueNameService.findLeagueName("imaqtpie")
            .then(gameState =>
                this.setState({gameState: gameState}));
    }

    render() {
        return (
            <Router>
                <div>
                    <Row>
                        <Col>
                            <Panel title='Message Modals'>
                                <Row>
                                    <Col grow={false}>
                                        <Button type='primary' onClick={e => this.onRenderModal('primaryModal')} />
                                    </Col>
                                    <Col grow={false}>
                                        <Button type='success' onClick={e => this.onRenderModal('successModal')} />
                                    </Col>
                                    <Col grow={false}>
                                        <Button type='warning' onClick={e => this.onRenderModal('warningModal')} />
                                    </Col>
                                    <Col grow={false}>
                                        <Button type='danger' onClick={e => this.onRenderModal('dangerModal')} />
                                    </Col>
                                    <Col grow={false}>
                                        <Button type='info' onClick={e => this.onRenderModal('infoModal')} />
                                    </Col>
                                </Row>
                            </Panel>
                        </Col>
                    </Row>
                </div>
            </Router>)
    }
}
