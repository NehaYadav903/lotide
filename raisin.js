//const raisinAlarm = function(cookie) {
  // Put your solution here
  let result = "All good!";
  for(let i = 0; i<cookie.length; i++) {
    if (cookie[i] === "🍇") {
      result = "Raisin alert!";
    }
  }
  return result;
}
console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));//

const raisinAlarmArray = function(cookies) {
  // Put your solution here
  let result=[];
  let alert = false
  for (let i = 0; i<cookies.length; i++){
    for (let j = 0; j<cookies[i].length; j++){
      if (cookies[i][j] === "🍇"){
        alert = true
      }
    }
    if (alert === true){
      result.push("Raisin alert!");
    } else {
      result.push("All good!");
    }
  return result;
  }
};
console.log(raisinAlarmArray(
  [
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"]
  ]
));

