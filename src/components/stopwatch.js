import React from 'react';
import Time from './format_time';
import Laps from './laps';

class Stopwatch extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            status: 'stopped',
            start: null,
            elapsed: 0,
        }
        this.laps = [];
        this.update = this.update.bind(this);
    }
    start(){
        const {elapsed} = this.state;
        const newStart = new Date().getTime() - elapsed;
        this.setState({
            status: 'running',
            start: newStart
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
        this.setState({
            status: 'stopped',
            start: null,
            elapsed: 0
        })
    }
    lap(){
        const {elapsed} = this.state;
        this.stop();
        this.laps.push(<Time elapsed={elapsed}/>)
        let lapsDiv = '';
        for(let i = 0; i < this.laps.length; i++){
            lapsDiv += this.laps[i];
        }
        return (
            <div>
                {lapsDiv}
            </div>
        )
    }
    render(){
        const {status, elapsed} = this.state;
        return (
            <div className="jumbotron">
                <h1 className="display-3"><Time elapsed={elapsed}/></h1>
                <hr className="my-3"/>
                <p className="lead text-center">{status}</p>
                <button onClick={this.start.bind(this)} className="btn btn-outline-success mx-3">Start</button>
                <button onClick={this.stop.bind(this)} className="btn btn-outline-danger mx-3">Stop</button>
                <button onClick={this.reset.bind(this)} className="btn btn-outline-warning mx-3">Reset</button>
                <button onClick={this.lap.bind(this)} className="btn btn-outline-success mx-3">Lap</button>
                <hr className="my-5"/>
                <h2>Laps</h2>
                {this.lap}
                {/* <Laps lap={<Time elapsed={elapsed}/>}/> */}
            </div>
        )
    }
}

export default Stopwatch;