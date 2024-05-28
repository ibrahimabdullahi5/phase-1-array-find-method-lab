// code your solution her

function superbowlWin(record) {
    const winningRecord = record.find(game => game.result === "W");

    return winningRecord ? winningRecord.year : undefined;
  }
  
  const record = [
    { year: 2014, result: "L" },
    { year: 2015, result: "W" },
    { year: 2016, result: "L" }
  ];
  
  console.log(superbowlWin(record));
  