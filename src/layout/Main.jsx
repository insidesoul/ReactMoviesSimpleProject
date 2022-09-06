import React from "react"
import{CardList} from "../components/CardList";
import{Searhc} from "../components/Searhc";
import {Preloader} from "../components/Preloader";

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
    state = {
        totalRes: '',
        cardList: [],
        loading: true
    }

    componentDidMount() {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=harry potter`)
            .then(response => response.json())
            .then(data => this.setState({totalRes: data.totalResults, cardList: data.Search, loading: false}))
    }

    searchMovies = (str, type = 'all') => {
        this.setState({loading: true});
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
            .then(response => response.json())
            .then(data => this.setState({totalRes: data.totalResults, cardList: data.Search, loading: false}))
    }

    render() {
        const {cardList, loading, totalRes} = this.state;

        return <div className='fullback'>
            <main className='container content'>
                <Searhc searchMovies={this.searchMovies} totalRes={totalRes} />
                {
                    loading ? <Preloader /> : (<CardList cardList={cardList}/>)
                }
            </main>
        </div>
    }
}

export {Main}