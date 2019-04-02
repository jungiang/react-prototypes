import React from 'react';

class Laps extends React.Component{
    state = {
        laps: []
    }
    getLapsList(){
        this.setState({
            laps: LapsList
        })
    }
    render(){
        const {laps} = this.props;
        const lapsElement = laps.map((item, index)=>{
            return <div key={index}>{item}</div>
        });
        return (
            <div className="laps">
                {lapsElement}
            </div>
        )
    }
}

export default Laps;