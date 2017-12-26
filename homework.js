let life1=100;      //life of player 1
let life2=100;      //life of player 2 that is computer;    
let kick=15;        //point reduce on kick
let punch=10;       //point reduce on punch
let kickcounter1=0;     //variable to store number of kicks by player 1
let kickcounter2=0;     //variable to store number of kicks by player 2
let input;              //variable to take input from user
let check1=true;        //check for loop    
//simple algorithm for how computer will behave
function computerstrike(){
  if(life1>=85){
      return 'kick';
  }
  else if(life1>=10&&life1<=15){
      return 'kick';
  }
 else {
     return 'punch';
}
}
//loop to contine game untill one's life is zero
while(life2>0){
        //human turn
    input=prompt("Enter you strike");     //enter strike
if(input==='kick' && kickcounter1<3){       //condition to see what type of strike it is and if it is kick it not more then three
    life2=life2-kick;                        //life after kick   
    kickcounter1++;             
    console.log("life2="+life2);
if(life2<=0){                                       //break whenerver one is short of life
    break;
}
}
if(input==='punch'){
    life2=life2-punch;                            // life after punch
    console.log("life2="+life2);

    if(life2<=0){                                       //break whenerver one is short of life
        break;
    }
}
//computer turn
if(computerstrike()==='kick'&& kickcounter2<3){                 
    life1=life1-kick;                                       //life after kick
    kickcounter2++;                             
    console.log("life1="+life1);    

    if(life1<=0){
        break;
    }
}
else if(computerstrike()==='punch'){
    life1=life1-punch;                                  //life after punch
    console.log("life1="+life1);
    
if(life1<=0){                                           //break whenerver one is short of life
    break;
}
}
}
//check who wins
if(life1<=0){                   
    console.log("player 2 wins");
    
}
else if(life2<=0) {
    console.log("player 1 wins");
}