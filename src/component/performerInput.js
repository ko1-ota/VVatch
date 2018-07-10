import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Row, Col, Input, Button } from 'reactstrap';
import MdClear from 'react-icons/lib/md/clear';


export default class PerformerInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            i: props.i,
            performer_initial: 'performer_initial-' + props.i,
            performer_name: 'performer_name-' + props.i
        }
        this.handleClickRemove = this.handleClickRemove.bind(this);
    }

    handleClickRemove() {
        return this.props.removePerformer();
    }

    render() {
        return (
            <Row>
                <Col sm="3">
                    <Input type="select" name={this.state.performer_initial} id={this.state.performer_initial} placeholder="頭文字を選択">
                        <option>あ</option>
                        <option>い</option>
                        <option>う</option>
                        <option>え</option>
                        <option>お</option>
                    </Input>
                </Col>
                <Col sm="8"><Input type="select" name={this.state.performer_name} id={this.state.performer_name} placeholder="名前をリストから選択" /></Col>
                <Col sm="1">
                    <Button type="button" onClick={() => this.handleClickRemove()} color="danger" outline><MdClear /></Button>
                </Col>
            </Row>
        );
    }
}