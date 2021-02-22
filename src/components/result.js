import axios from 'axios';
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: null,
            options: null,
            vote: null
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
        //console.log(res)
        this.setState({
            question: res.data.question,
            options: res.data.option,
        })

        await this.getVote();
    }

    async addVote(id) {
        //console.log(id)
        await axios.post(`http://localhost:3005/question/vote/add`, {id, username: this.props.username});
        this.getOptions();
    }

    async getVote() {
        const { options } = this.state;
        let vote = []
        for(const option of options) {
            let res = await axios.get('http://localhost:3005/question/' + option.ID + '/vote')
            vote.push(res.data);
        }

        this.setState({vote: vote});
    }

    countVote(id) {
        console.log(id)
        console.log(this.state.vote)
        const {vote} = this.state;
        let count = 0;
        if(vote) {
            vote.forEach(item => {
                item.forEach(item2 => {
                    console.log(item2)
                    if(item2.Choice == id) count++;
                })
            })
        }

        return count;
    }

    render() {

        const { question, options, vote } = this.state;
        const { username } = this.props;
        //console.log(username)

        return (
            <div>
                {question ?
                    <Container style={{ marginTop: 100 }}>
                        <h1 style={{ marginBottom: 50 }}>Vote Result :</h1>
                        <Row style={{ textAlign: 'center' }}>
                            {options.map((item, i) => {
                                return (
                                    <Col key={i} sm>
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Body>
                                                <Card.Title>{item.Text}</Card.Title>
                                                <Card.Text style={{ fontSize: 20 }}>{this.countVote(item.ID)}</Card.Text>
                                                <Button variant="primary" disabled={username ? false : true} onClick={() => this.addVote(item.ID)}>Voter</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
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