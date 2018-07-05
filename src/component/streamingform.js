import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Form, Input, Row, Col, Button, Table } from 'reactstrap';
import MdCheck from 'react-icons/lib/md/check';


export default class StremingForm extends Component {
    render() {
        return (
            <div>
                <Form>
                    <Table responsive>
                        <tbody>
                            <tr>
                                <th scope="row">配信場所</th>
                                <td>
                                    <Row>
                                        <Col sm="8"><Input type="url" name="url" id="url" placeholder="配信のURL または チャンネル名" /></Col>
                                    </Row>
                                </td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <th scope="row">開始日時</th>
                                <td>
                                    <Row>
                                        <Col sm="4"><Input type="date" name="date_start" id="date_start" placeholder="配信開始時の日付" /></Col>
                                        <Col sm="4"><Input type="time" name="time_start" id="time_start" placeholder="配信開始時刻" /></Col>
                                    </Row>
                                </td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <th scope="row">出演者</th>
                                <td>
                                    <Row>
                                        <Col sm="2">頭文字を選択</Col>
                                        <Col sm="6">名前をリストから選択</Col>
                                    </Row>
                                    <Row>
                                        <Col sm="2">
                                            <Input type="select" name="performer_initial-1" id="performer_initial-1" placeholder="頭文字を選択">
                                                <option>あ</option>
                                                <option>い</option>
                                                <option>う</option>
                                                <option>え</option>
                                                <option>お</option>
                                            </Input>
                                        </Col>
                                        <Col sm="6"><Input type="select" name="performer_name-1" id="performer_name-1" placeholder="名前をリストから選択" /></Col>
                                    </Row>
                                    <Row>
                                        <Col sm="2"><Input type="select" name="performer_initial" id="performer_initial-2" placeholder="頭文字を選択" /></Col>
                                        <Col sm="6"><Input type="select" name="performer_name" id="performer_name-2" placeholder="名前をリストから選択" /></Col>
                                    </Row>
                                    <Row>
                                        <Col><Button type="button" size="sm" outline color="secondary">出演者をさらに追加</Button></Col>
                                    </Row>
                                </td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <th></th>
                                <td><Button type="submit" color="info"><MdCheck />配信を登録</Button></td>
                            </tr>
                        </tbody>
                    </Table>
                </Form>
            </div>
        );
    }
}

