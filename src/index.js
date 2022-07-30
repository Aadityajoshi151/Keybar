function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const TOTAL_SEGMENTS = 15;
const COLORS = ['blue','red','green'];
flag=true;

//TODO:- Fix ghosting issue

document.addEventListener("keypress",async function(){
    if (flag){
        flag=false;
        var color = COLORS[Math.floor(Math.random()  * COLORS.length)];
        for(let i=TOTAL_SEGMENTS; i>=1 ;i--){
            document.getElementById(i).style.color = color;
            await sleep(10);
        }   
        for(let j=1; j<=TOTAL_SEGMENTS; j++){
            document.getElementById(j).style.color = 'white';
            await sleep(20);
        }
        flag=true;
    }
    
})

