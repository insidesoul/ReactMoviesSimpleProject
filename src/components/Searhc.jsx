import React from 'react'
// import {Card} from "./Card";

class Searhc extends React.Component {
    state = {
        search: 'Harry Potter',
        type: 'all',
    }

    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.props.searchMovies(this.state.search, this.state.type);
        }
    }

    handleFilter = (event) => {
        this.setState(() => ({type: event.target.dataset.type}), () => {
            this.props.searchMovies(this.state.search, this.state.type);
        })
    }

    render() {
        return <div className="row">
                <div className="input-field ">
                    <input
                        placeholder="search"
                        type="search"
                        className="validate searchStr"
                        value={this.state.search}
                        onChange={(e) => this.setState({search: e.target.value})}
                        onKeyDown={this.handleKey}
                    />
                    <button className='btn search-btn' onClick={() => this.props.searchMovies(this.state.search, this.state.type)}>Search</button>

                    <div>
                        <label className="searchRadio">
                            <input className="group1" name="type" type="radio" data-type="all" onChange={this.handleFilter} checked={this.state.type === 'all'}/>
                            <span>All</span>
                        </label>
                        <label className="searchRadio">
                            <input className="with-gap" name="type" type="radio" data-type="movie" onChange={this.handleFilter}  checked={this.state.type === 'movie'}/>
                            <span>Movies only</span>
                        </label>
                        <label className="searchRadio">
                            <input className="with-gap" name="type" type="radio" data-type="series" onChange={this.handleFilter} checked={this.state.type === 'series'}/>
                            <span className="searchRadio">Series only</span>
                        </label>

                        <div className='totalRes'>Total results: {this.props.totalRes ? this.props.totalRes : '0'}</div>
                    </div>
                </div>
        </div>
    }
}

export {Searhc}