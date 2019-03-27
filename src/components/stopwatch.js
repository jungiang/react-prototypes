import React from 'react';
import Time from './format_time';

class Stopwatch extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            status: 'stopped',
            start: null,
            elapsed: 0
        }
        this.update = this.update.bind(this);
    }
    start(){
        this.setState({
            status: 'running',
            start: new Date().getTime()
        });
        setTimeout(this.update, 10);
    }
    stop(){
        this.setState({
            status: 'stopped'
        });
    }
    update(){
        const {status, start} = this.state;
        if(status === 'running'){
            this.setState({
                elapsed: new Date().getTime() - start
            });
            setTimeout(this.update, 10);
        }
    }
    reset(){
        const {status, start, elapsed} = this.state;
        this.setState({
            status: 'stopped',
            start: null,
            elapsed: 0
        })
    }
    render(){
        const {status, start, elapsed} = this.state;
        return (
            <div>
                <h1><Time elapsed={elapsed}/></h1>
                <p>{status}</p>
                <button onClick={this.start.bind(this)}>Start</button>
                <button onClick={this.stop.bind(this)}>Stop</button>
                <button onClick={this.reset.bind(this)}>Reset</button>
            </div>
        )
    }
}

export default Stopwatch;