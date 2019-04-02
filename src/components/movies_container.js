import React from 'react';
import Movie from  './movie';
import axios from 'axios';

class MovieContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            movies: []
        }
    }
    componentDidMount(){
        const url = 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json';
        axios.get(url).then(resp=>{
            console.log(resp.data.feed.entry);
            this.setState({
                movies: resp.data.feed.entry
            })
        }).catch(err=>{
            console.log(err);
        });
        // try{
        //     const url = 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json';
        //     const resp = await axios.get(url);
        //     console.log(resp);
        // }catch(err){
        //     console.log(err);
        // }
    }
    render(){
        console.log(this.state);
        const movieList = this.state.movies.map((movieInfo, index)=>{
            return <Movie info={movieInfo} key={index}/>
        })
        return (
            <div>
                {movieList}
            </div>    
        )
    }
}

export default MovieContainer;