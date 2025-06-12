function scuberGreetingForFeet(num1){

 if (num1 <= 400) {
    return 'This one is on me!';
 }
 if(num1 > 400 && num1 <= 2000) {
    return 'That will be twenty bucks.';
 }
 if(num1 > 2000 && num1 <= 2500) {
    return 'I will gladly take your thirty bucks.';
}
  if(num1 > 2500) {
      return 'No can do.';
  }
}

function ternaryCheckCity(destination){
 if (destination === 'NYC') {
    return 'Ok, sounds good.';
 }
 else {
    return 'No go.';
 }
}

function switchOnCharmFromTip(tip){
 if (tip === 'generous') {
    return 'Thank you so much.';
 }
 else if (tip === 'not as generous') {
    return 'Thank you.';
 }
 else {
    return 'Bye.';
 }

}