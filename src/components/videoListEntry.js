angular.module('video-player')
.component('videoListEntry', {
  // TODO
  bindings: {
    video: '<',
    currentVideo: '='
  },
  templateUrl: 'src/templates/videoListEntry.html'
});
