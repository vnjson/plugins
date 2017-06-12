
function vnjsonAudio(data){
var name = "";  
var volume = 0.5;
  if(typeof data==="object"){
        name = data.name;
        volume = data.volume||volume;
  }else if(typeof data ==="string"){
        console.log(data)
  }else{
    new Error('Неверные данные')
  }
let songUri = [ name, 'mp3' ].join('.');
var sound = new Howl({
  src: ['80s_vibe.mp3'],
  autoplay: false,
  preload: true,
  loop: false,
  volume,
  mute: false,
  usingWebAudio: true,
  html5: true,
});

//sound.load(preload);
sound.on('load', function(){
  console.log('load');
  console.log(sound.duration())
  sound.play();
});
// Fires when the sound finishes playing.
sound.on('end', function(){
  console.log('Finished!');
});



};

var assets = [
      {name: "carder", extname: ".mp3", size: '1403kB', path: './assets/carder.mp3'},
      {name: "80s_vibe", extname: ".mp3", size: '3152kB', path: './assets/80s_vibe.mp3'},
      {name: "background", extname: ".png", size: '141kB', path: './assets/background.png'},
];
//preload.indexOf('80s_vibe.mp3')
var  preload = assets.filter((item)=>{
  if(item.extname===".mp3"){
    return item;
  }
}).map((item)=>{
  return Object.assign(item, {Howl: null})
})
  /*
var param = {
      name: "carder",
      autoplay: true,
      loop: true,
      volume: 0.9,
}*/

vnjs.on('audio', vnjsonAudio)