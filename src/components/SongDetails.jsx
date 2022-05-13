import React from "react";
import { connect } from "react-redux";

const SongDetails = ({ song }) => {
  // when render this page on the browser for the fist time it is going to take selected song as null. then we can see an error message. To prevent that we can check selected song is null or not.
  if (!song) {
    return <div>Select a song</div>;
  }

  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Title: {song.title}
        <br />
        Duration: {song.duration}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetails);
