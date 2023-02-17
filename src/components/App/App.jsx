import { Component } from 'react';
import { Player } from 'components/Player/Player';
import { VideoList } from '../VideoList/VideoList';
import videos from 'videos.json';

export class App extends Component {
  state = {
    selectVideo: null,
  };
  selectVideo = link => {
    this.setState({ selectVideo: link });
  };

  render() {
    return (
      <div>
        <h1> Selected video: {this.state.selectVideo}</h1>
        <VideoList videos={videos} onSelect={this.selectVideo} />
        <Player url={this.state.selectVideo} />
      </div>
    );
  }
}
