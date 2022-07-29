function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const SEGMENTS = 10;
document.addEventListener("keypress",async function(){
    for(let i=SEGMENTS; i>=1 ;i--){
        document.getElementById(i).style.color = 'green';
        await sleep(20);
    }
    for(let j=1; j<=SEGMENTS; j++){
        document.getElementById(j).style.color = 'white';
        await sleep(40);
    }
})
