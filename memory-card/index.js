
vnjs.on(function(){
  let { ctx } = this;
  function save(data){
    localforage.setItem(data.title, data, (err)=>{
      if(err){
        console.log(err);
      }
      console.log('Игра сохранена');

    });
  };

  function load(key){
    localforage.getItem(key).then((data)=>{
        console.log(key+": has been loaded!");
    }).catch(function (err) {
          console.error(err);
    });
  };

let saveBtn = document.querySelector('#save-btn');
let loadBtn = document.querySelector('#load-btn');

saveBtn.addEventListener('mousedown', function(e){
  e.preventDefault();
  save({
    scene: ctx.scene,
    label: ctx.label,
    num: ctx.num,
    title: "vnjson-demo-game"
  });
});

loadBtn.addEventListener('mousedown', function(e){
  e.preventDefault();
  load("vnjson-demo-game");
});

});

