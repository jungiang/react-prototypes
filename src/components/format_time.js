import React from 'react';

class FormatTime extends React.Component{
    constructor(props){
        super(props);
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
    render(){
        const {hour, min , sec, ms} = this.millisecondsToTime();
        return (
            <div>{hour}:{min}:{sec}:{ms}</div>
        )
    }
}

export default FormatTime;