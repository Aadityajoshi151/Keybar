const {ipcRenderer} = require("electron")

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const TOTAL_SEGMENTS = 27;

const COLORS = ['#f90020','#e500bd','#d101f7','#ac0fff','#7a29ff','#394eff','#076afc','#0d71fd','#0798db','#05b99e','#05df57','#0df91d','#80fd01','#b6f802','#dcf001','#fbee02'];

const four_shades = ['#02f412','#1ad826','#1daf27','#1a8220']

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
                    await sleep(6);
                }   
                for(let j=HEIGHT ; j<=TOTAL_SEGMENTS ; j++){
                    document.getElementById(j).style.backgroundColor = 'white';
                    await sleep(12);
                }
                flag=true;
            }
        break
        case "riseUp":
            for(let i=TOTAL_SEGMENTS; i>=1; i--){
                console.log(i)
                document.getElementById(i).style.backgroundColor = four_shades[0]
                await sleep(12);
                if((i+1) <= TOTAL_SEGMENTS){
                    document.getElementById(i+1).style.backgroundColor = four_shades[1]
                }
                await sleep(12);
                if((i+2) <= TOTAL_SEGMENTS){
                    document.getElementById(i+2).style.backgroundColor = four_shades[2]
                }
                await sleep(12);
                if((i+3) <= TOTAL_SEGMENTS){
                    document.getElementById(i+3).style.backgroundColor = four_shades[3]
                }
                await sleep(12);
                if((i+4) <= TOTAL_SEGMENTS){
                    document.getElementById(i+4).style.backgroundColor = 'white';
                          
                }
                await sleep(12);
            }
            //iteration 1
            document.getElementById(4).style.backgroundColor = 'white';
            await sleep(12);
            document.getElementById(3).style.backgroundColor = four_shades[3];
            await sleep(12);
            document.getElementById(2).style.backgroundColor = four_shades[2];
            await sleep(12);
            document.getElementById(1).style.backgroundColor = four_shades[1];
            //iteration 2
            document.getElementById(3).style.backgroundColor = 'white';
            await sleep(12);
            document.getElementById(2).style.backgroundColor = four_shades[3];
            await sleep(12);
            document.getElementById(1).style.backgroundColor = four_shades[2];
            //iteration 3
            document.getElementById(2).style.backgroundColor = 'white';
            await sleep(12);
            document.getElementById(1).style.backgroundColor = four_shades[3];
            await sleep(12);
            //iteration 4
            document.getElementById(1).style.backgroundColor = 'white';
            await sleep(12);
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