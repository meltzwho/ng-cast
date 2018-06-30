angular.module('video-player')
.component('videoList', {
  // TODO
  bindings: {
    videos: '<',
    currentVideo: '='
  },
  templateUrl: 'src/templates/videoList.html'
});
