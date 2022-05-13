import React, { Component } from "react";
// connect function can use to get date from the store and action creators correctly to the components
// when we need to update the state we must work with reducers but we cannot dirrectly do it. we must use dispatch tell redux we want to call action creator. as a solution for this we can use connet function it is automatically do it.
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    console.log(this.props);
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return { songs: state.songs };
};

export default connect(mapStateToProps, { selectSong })(SongList);
