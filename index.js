// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
  ]
  
  function superbowlWin(arr){
    let output = "";
    arr.find(look);
  
    function look(value){
      return output = value.result === "W" ? value.year : undefined;
    };
  
    return output;
  };
  
  console.log(superbowlWin(record));