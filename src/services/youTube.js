angular.module('video-player').service('youTube', function($window, $http) { //$* dependencies
  this.search = function(q) {
    return $http.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        q: q,
        type: 'video',
        maxResults: 5,
        key: $window.YOUTUBE_API_KEY,
        videoEmbeddable: 'true'
      }
    })
    .then(({data}) => { //destructure response.data
      return data.items;
    })
    .catch(err => {
      console.error('Error ', err);
    });
  };
});
