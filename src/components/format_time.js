import React from 'react';

class FormatTime extends React.Component{
    constructor(props){
        super(props);
        this.timeStyle = {
            display: 'inline-block',
            position: 'relative',
            left: '50%',
            transform: 'translate(-50%)',
            width: '383px'
        }
    }
    millisecondsToTime(){
        const {elapsed} = this.props;
        const sec = elapsed / 1000;
        const min = sec / 60;
        return {
            hour: Math.floor(min/60),
            min: Math.floor(min%60),
            sec: Math.floor(sec%60),
            ms: Math.floor(elapsed%100)
        }
    }
    leadingZero(number){
        number = number < 10 ? '0' + number : number;
        return number;
    }
    trailingZero(number){
        number = number < 10 ? number + '0' : number;
        return number;
    }
    render(){
        let {hour, min , sec, ms} = this.millisecondsToTime();
        return (
            <div style={this.timeStyle}>{this.leadingZero(hour)}:{this.leadingZero(min)}:{this.leadingZero(sec)}.{this.trailingZero(ms)}</div>
        )
    }
}

export default FormatTime;