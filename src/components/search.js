angular.module('video-player')

.component('search', {
  // TODO
  bindings: {
    videos: '='
  },
  controller: function(youTube) {
    this.handleSearch = () => {
      youTube.search(this.userInput)
      .then((videos) => {
        this.videos = videos;
      });
    };
  },
  templateUrl: 'src/templates/search.html'
});
