import React from 'react';

class Laps extends React.Component{
    render(){
        if(this.props.lap.props.elapsed === 0){
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