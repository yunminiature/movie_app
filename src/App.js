import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from './Movie';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  }

  getMovies = async () => {
    const {data: {data: {movies}}} = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
    console.log(movies)
    this.setState({movies, isLoading: false})
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const {isLoading, movies} = this.state
    return <div>{isLoading ? "Загрузка..." : movies.map(movie => {
      console.log(movie);
      return (<Movie 
        key={movie.id}
        id={movie.id}
        title={movie.title}
        year={movie.year}
        summary={movie.summary}
        poster={movie.medium_cover_image}
      />)
    })}</div>
  }
}
export default App;
