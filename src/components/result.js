import axios from 'axios';
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: null,
            options: null,
            vote: null,
            hasVote: []
        };
    }

    componentDidMount() {
        this.getOptions()
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.questionID !== prevProps.questionID) {
            this.getOptions()
        }
    }

    async getOptions() {
        let res = await axios.get('http://localhost:3005/question/' + this.props.questionID);
        console.log(res)
        this.setState({
            question: res.data.question,
            options: res.data.option,
        })

        await this.getVote();
    }

    async addVote(id) {
        //console.log(id)
        if (this.props.admin) {
            this.deleteOption(id);
        } else {
            await axios.post(`http://localhost:3005/question/vote/add`, { id, username: this.props.username });
            this.getOptions();
        }
    }

    deleteOption = async (id) => {
        await axios.post(`http://localhost:3005/option/remove`, { id });
        this.getOptions();
    }

    async removeVote(id) {
        console.log(id)
        await axios.delete(`http://localhost:3005/question/` + id + `/vote/remove`);
        this.getOptions();
    }

    async getVote() {
        const { options } = this.state;
        let vote = []
        for (const option of options) {
            let res = await axios.get('http://localhost:3005/question/' + option.ID + '/vote')
            vote.push(res.data)
        }

        this.setState({ vote: vote });
    }

    checkUser(id) {
        var vote = this.state.vote
        var hasVote = []
        for (var i = 0; i < vote.length; i++) {
            var result = []
            for (let j = 0; j < vote[i].length; j++) {
                result.push(vote[i][j].User);
            }
            if (result.indexOf(id) != -1) {
                hasVote.push(true)
            } else {
                hasVote.push(false)
            }
        }

        this.setState({ hasVote: hasVote });
    }

    countVote(id) {
        const { vote } = this.state;
        let count = 0;
        if (vote) {
            vote.forEach(item => {
                item.forEach(item2 => {
                    if (item2.Choice == id) count++;
                })
            })
        }

        return count;
    }

    render() {

        const { question, options, vote, hasVote } = this.state;
        const { username } = this.props;

        return (
            <div>
                {question ?
                    <Container style={{ marginTop: 100 }}>
                        <h1 style={{ marginBottom: 50 }}>Vote Result :</h1>
                        <Row style={{ textAlign: 'center' }}>
                            {options.map((item, i) => {
                                console.log(item)
                                return (
                                    item.Hide === "false" ?
                                        <Col key={i} sm>
                                            <Card style={{ width: '18rem' }}>
                                                <Card.Body>
                                                    <Card.Title>{item.Text}</Card.Title>
                                                    <Card.Text style={{ fontSize: 20 }}>{this.countVote(item.ID)}</Card.Text>
                                                    <Button variant="primary" disabled={this.props.admin ? false : username ? false : true} onClick={() => this.addVote(item.ID)}>{this.props.admin ? 'Delete' : 'Voter'}</Button>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        :
                                        null
                                )
                            })}
                        </Row>

                    </Container>
                    :
                    null
                }
            </div>
        )
    }
}

export default Result