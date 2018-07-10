import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Form, Label, Input, Row, Col, Button, Table } from 'reactstrap';
import MdCheck from 'react-icons/lib/md/check';
import MdAdd from 'react-icons/lib/md/add';
import PerformerInput from './performerInput.js';


export default class StreamingForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id_performer_latest: 0,
            performers: [
                { name: '', id_performer: 0 }
            ]
        }
        this.addPerformer = this.addPerformer.bind(this);
        this.removePerformer = this.removePerformer.bind(this);
    }

    addPerformer() {
        let id_performer_next = this.state.id_performer_latest + 1;
        this.setState({ id_performer_latest: id_performer_next });
        this.setState({ performers: this.state.performers.concat([{ name: '', id_performer: id_performer_next }]) });
    }

    removePerformer(i) {
        this.setState({ performers: this.state.performers.filter((element) => { return element.id_performer != i })});
    }

    render() {
        return (
            <div>
                配信を登録する
                <Form>
                    <Table responsive>
                        <tbody>
                            <tr>
                                <th scope="row">配信場所</th>
                                <td>
                                    <Row>
                                        <Col sm="12"><Input type="url" name="url" id="url" placeholder="配信のURL または チャンネル名" /></Col>
                                    </Row>
                                </td>
                            </tr>
                        </tbody>
                        <tbody>
                            {/* TODO: 開始日時が未来なら「開始予定」、開始日時が過去なら「開始」 */}
                            <tr>
                                <th scope="row">開始予定</th>
                                <td>
                                    <Row>
                                        <Col sm="6"><Input type="date" name="date_start" id="date_start" placeholder="配信開始時の日付" /></Col>
                                        <Col sm="6"><Input type="time" name="time_start" id="time_start" placeholder="配信開始時刻" /></Col>
                                    </Row>
                                </td>
                            </tr>
                            {/* TODO: 開始日時が未来なら「終了予定」、開始日時が過去なら「終了」 */}
                            <tr>
                                <th scope="row">終了予定</th>
                                <td>
                                    <Row>
                                        <Col sm="6"><Input type="date" name="date_finish" id="date_finish" placeholder="配信終了時の日付" /></Col>
                                        <Col sm="6"><Input type="time" name="time_finish" id="time_finish" placeholder="配信終了時刻" /></Col>
                                    </Row>
                                </td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <th scope="row">出演者</th>
                                <td>
                                    <Row>
                                        <Col sm="3">
                                            <Label for="performer_initial-0">頭文字を選択</Label>
                                        </Col>
                                        <Col sm="8">
                                            <Label for="performer_name-0">名前をリストから選択</Label>
                                        </Col>
                                    </Row>
                                    {this.state.performers.map((performer) => {
                                        let id_performer = Number(performer.id_performer);
                                        return <PerformerInput key={id_performer} i={id_performer} removePerformer={() => this.removePerformer(id_performer)} />;
                                    })}
                                    <Row>
                                        <Col><Button type="button" onClick={this.addPerformer} size="sm" color="link"><MdAdd />出演者をさらに追加</Button></Col>
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

// const PerformerInput = (key) => {
//     const performer_initial = 'performer_initial-' + key;
//     const performer_name = 'performer_name-' + key;
//     return (
//         <Row key={key.toString()}>
//             <Col sm="3">
//                 <Input type="select" name={performer_initial} id={performer_initial} placeholder="頭文字を選択">
//                     <option>あ</option>
//                     <option>い</option>
//                     <option>う</option>
//                     <option>え</option>
//                     <option>お</option>
//                 </Input>
//             </Col>
//             <Col sm="8"><Input type="select" name={performer_name} id={performer_name} placeholder="名前をリストから選択" /></Col>
//             <Col sm="1">
//                 <Button type="button" onClick={() => props.handleClickRemove(key)} color="danger" outline><MdClear /></Button>
//             </Col>
//         </Row>
//     );
// }