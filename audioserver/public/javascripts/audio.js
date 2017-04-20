var context;
var someSound = null;
var dogBarkingBuffer = null;
window.addEventListener('load', init, false);

function init(){
  try {
    console.log('this happpend')
    window.AudioContext = window.AudioContext||window.webkitAudioContext;

  }
  catch(e){
    alert('Web audio API is not supported in this browser')
  }
}

    context = new AudioContext();
    loadSound('/javascripts/prettyPolly.mp3')
    loadDogSound('/javascripts/prettyPolly.mp3')

function loadSound(url){
  var request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.responseType = 'arraybuffer';
  console.log('load sound')
  // decode asynchronously
  request.onload = function(){
    console.log('request')
    context.decodeAudioData(request.response, function(buffer){
      someSound = buffer
    }, function(err){
      console.log(err)
    });
  }
  request.send()
}

  function loadDogSound(url) {
    console.log('lad')
  var request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.responseType = 'arraybuffer';

  // Decode asynchronously
  request.onload = function() {
    context.decodeAudioData(request.response, function(buffer) {
      dogBarkingBuffer = buffer;
    }, function(err){
      console.log(err)
    });
  }
  request.send();
}
