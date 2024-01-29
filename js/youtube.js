var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0]; //첫번째 스크립트 태그를 가져옴
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag); //첫번째 스크립트 태그 앞에 tag를 넣어줌

function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8',
    playerVars: {
      autoplay: true, //자동재생 유무
      loop: true, //반복재생 유무
      playlist: 'An6LvWQuj_8' //반복재생할 유튜브 영상 ID 목록
    },
    events: {
      onReady: function (event) {
        event.target.mute() //음소거
      }
    }
  });
}