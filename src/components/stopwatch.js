import React from 'react';

class Stopwatch extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            status: 'stopped',
            start: null,
            elapsed: 0
        }
    }
    start(){
        this.setState({
            status: 'running',
            start: new Date().getTime()
        });
    }
    stop(){
        this.setState({
            status: 'stopped'
        });
    }
    update(){
        const {status, start} = this.start;
        const 
    }
    render(){
        const {status, start, elapsed} = this.state;
        return (
            <div>
                <h1>{elapsed}</h1>
                <p>{status}</p>
                <button onClick={this.start.bind(this)}>Start</button>
                <button onClick={this.stop.bind(this)}>Stop</button>
            </div>
        )
    }
}

export default Stopwatch;