function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const SEGMENTS = 15;
const COLORS = ['blue','red','green'];

//TODO:- Fix ghosting issue

document.addEventListener("keypress",async function(){
    var color = COLORS[Math.floor(Math.random()  * COLORS.length)];
    for(let i=SEGMENTS; i>=1 ;i--){
        document.getElementById(i).style.color = color;
        await sleep(10);
    }
    for(let j=1; j<=SEGMENTS; j++){
        document.getElementById(j).style.color = 'white';
        await sleep(20);
    }
})
