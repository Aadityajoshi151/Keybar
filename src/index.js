function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const TOTAL_SEGMENTS = 16;
const COLORS = ['blue','red','lime','fuchsia','violet','orange'];
flag=true;

//Creating the segments dynamically via js
for(let i=1 ; i<=TOTAL_SEGMENTS ; i++){
    const segment = document.createElement('div');
    segment.classList.add('segment');  
    segment.setAttribute('id', i);
    document.getElementById('container').appendChild(segment);
}

document.addEventListener("keypress",async function(){
    if (flag){
        flag=false;
        var color = COLORS[Math.floor(Math.random()  * COLORS.length)];
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
})

