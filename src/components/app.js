angular.module('video-player')

.component('app', {
  // TODO
  controller: function(youTube, $window){
    this.videos = $window.exampleVideoData;
    this.currentVideo = $window.exampleVideoData[0];

    youTube.search('kill angular')
    .then((videos) => {
      this.videos = videos;
      this.currentVideo = this.videos[0];
    });

    this.selectVideo = (video) => {
      this.currentVideo = video;
    };
  },
  templateUrl: 'src/templates/app.html'
});
