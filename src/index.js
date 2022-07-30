function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const TOTAL_SEGMENTS = 16;
const COLORS = ['blue','red','green'];
flag=true;

document.addEventListener("keypress",async function(){
    if (flag){
        flag=false;
        var color = COLORS[Math.floor(Math.random()  * COLORS.length)];
        HEIGHT = Math.floor((Math.random() * TOTAL_SEGMENTS)+1);
        for(let i=TOTAL_SEGMENTS; i>=HEIGHT ;i--){
            document.getElementById(i).style.color = color;
            await sleep(10);
        }   
        for(let j=HEIGHT; j<=TOTAL_SEGMENTS; j++){
            document.getElementById(j).style.color = 'white';
            await sleep(20);
        }
        flag=true;
    }   
})

