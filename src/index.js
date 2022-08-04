const {ipcRenderer} = require("electron")

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const TOTAL_SEGMENTS = 27;

const COLORS = ['#f90020','#e500bd','#d101f7','#ac0fff','#7a29ff','#394eff','#076afc','#0d71fd','#0798db','#05b99e','#05df57','#0df91d','#80fd01','#b6f802','#dcf001','#fbee02'];

var MODE = "randomHC" //default mode
var flag=true;

//Creating the segments dynamically via js
for(let i=1 ; i<=TOTAL_SEGMENTS ; i++){
    const segment = document.createElement('div');
    segment.classList.add('segment');  
    segment.setAttribute('id', i);
    document.getElementById('container').appendChild(segment);
}

document.addEventListener("keyup",async function(){
    switch(MODE){
        case "randomHC":
            if (flag){
                flag=false;
                var color = COLORS[Math.floor(Math.random() * COLORS.length)];
                HEIGHT = Math.floor((Math.random() * TOTAL_SEGMENTS)+1);
                for(let i=TOTAL_SEGMENTS ; i>=HEIGHT ; i--){
                    document.getElementById(i).style.backgroundColor = color;
                    await sleep(10);
                }   
                for(let j=HEIGHT ; j<=TOTAL_SEGMENTS ; j++){
                    document.getElementById(j).style.backgroundColor = 'white';
                    await sleep(20);
                }
                flag=true;
            }
        break
        case "riseUp":
            console.log("RISE!!!")
        break
    }
       
})
window.addEventListener('contextmenu', (e) => {
    e.preventDefault()
    ipcRenderer.send('show-mode-menu')
  })

  ipcRenderer.on('mode-menu-command', (e, mode) => {
    MODE = mode
    console.log(mode)
  })