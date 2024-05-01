import React from 'react';

// Sometimes it's nice to put components in the same folder as the page they are used in!

const VideoSection = () => {
  return (
    <iframe className="marginTop4" width="560" height="315" src="https://www.youtube-nocookie.com/embed/SxkGvjiLu7Y?si=mtrjbPVwmbTQMShP" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
  );
}

export default VideoSection;
