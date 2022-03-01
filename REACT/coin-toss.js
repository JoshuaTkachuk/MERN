function fiveHeads() {
    return new Promise( (resolve, reject) => {
        let headCount = 0;
        let attempts = 0;
        while(headCount < 5){
            attempts ++;
            coin = flipCoin();
            if(coin === "heads"){
                headCount ++;
            }
            else{
                headCount = 0;
            }
            if(attempts >= 100){
                reject("sorry, it took more than 100 attempts to land heads five times in a row");
            }
        }
        resolve("it took " + attempts + " tries to land heads five times in a row");
            
        });
    }
function flipCoin(){
    return Math.random() > 0.5? "heads": "tails";
}
    fiveHeads()
        .then( res => console.log(res) )
        .catch( err => console.log(err) );
    console.log( "When does this run now?" );