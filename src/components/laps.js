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
        const {laps} = this.state;
        const lapElements = laps.map((item, index)=>{

        });
        if(this.state.laps === 0){
            return null;
        }
        return (
            <div className="laps">
                {this.props.lap}
            </div>
        )
    }
}

export default Laps;