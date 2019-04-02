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
            laps: [],
            countdown: '00:00:00.00'
        }
        this.update = this.update.bind(this);
    }
    start(){
        const {elapsed, status} = this.state;
        const newStart = new Date().getTime() - elapsed;
        if(status === 'stopped'){
            this.setState({
                status: 'running',
                start: newStart
            });    
        }else{
            this.setState({
                start: newStart
            });    
        }
        setTimeout(this.update, 10);
    }
    stop(){
        const {status} = this.state;
        if(status !== 'countdown'){
            this.setState({
                status: 'stopped'
            });
        }
    }
    update(){
        debugger;
        const {status, start, countdown, elapsed} = this.state;
        if(status === 'running'){
            this.setState({
                elapsed: new Date().getTime() - start
            });
            setTimeout(this.update, 10);
        }else if(status === 'set'){
            if(countdown < 1){
                this.stop();
            };
            this.setState({
                elapsed: new Date().getTime() - start,
                countdown: countdown - elapsed
            });
            setTimeout(this.update, 10);
        }
    }
    reset(){
        this.setState({
            status: 'stopped',
            start: null,
            elapsed: 0,
            laps: []
        })
    }
    lap(){
        const {elapsed, status, laps} = this.state;
        if(status === 'running'){
            const newLap = <Time elapsed={elapsed}/>;
            this.setState({
                laps: [...laps, newLap]
            });
        }
    }
    countdown(){
        const {status} = this.state;
        if(status !== 'countdown'){
            this.setState({
                status: 'countdown',
                start: null,
                elapsed: 0,
                laps: []
            })    
        }else{
            this.reset();
        }
    }
    handleCountdownTimer(e){
        let timer = e.target.value;
        this.setState({
            countdown: parseInt(timer)
        })
    }
    setCountdown(){
        const {status} = this.state;
        if(status === 'countdown'){
            this.setState({
                status: 'set'
            })
        }
        console.log(this.state.countdown);
    }
    render(){
        const {status, elapsed, laps, countdown} = this.state;
        const countdownDisplay = (<div>
                <input type="number" onChange={this.handleCountdownTimer.bind(this)} placeholder={countdown}/>
                <button onClick={this.setCountdown.bind(this)} className="btn btn-outline-warning mx-3">Enter</button>
            </div>);
            let display = null;
        switch(status){
            case 'countdown':
                display = countdownDisplay;
                break;
            case 'set':
                display = countdown;
                break;
            default:
                display = <Time elapsed={elapsed}/>;
                break; 
        }
        return (
            <div className="jumbotron">
                <h1 className="display-3">{display}</h1>
                <hr className="my-3"/>
                <p className="lead text-center">{status}</p>
                <button onClick={this.start.bind(this)} className="btn btn-outline-success mx-3">Start</button>
                <button onClick={this.stop.bind(this)} className="btn btn-outline-danger mx-3">Stop</button>
                <button onClick={this.reset.bind(this)} className="btn btn-outline-warning mx-3">Reset</button>
                <button onClick={this.lap.bind(this)} className="btn btn-outline-success mx-3">Lap</button>
                <button onClick={this.countdown.bind(this)} className="btn btn-outline-danger mx-3">Countdown</button>
                <hr className="my-5"/>
                <h2>Laps</h2>
                <div><Laps laps={laps}/></div>
            </div>
        )
    }
}

export default Stopwatch;