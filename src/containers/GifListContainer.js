import React, { Component } from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

class GifListContainer extends Component {

  state = {
    gifs: []
  }

  fetchGifs =(query="dog") => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(response => response.json())
      .then(json => this.setState({gifs: json.data.map( gif => ({ url: gif.images.original.url }) )}))
  }

  componentDidMount() {
    this.fetchGifs()
  }

  render() {
    return (
      <div>
        <GifSearch fetchGifs={this.fetchGifs} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default GifListContainer;
