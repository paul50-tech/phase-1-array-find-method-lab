// code your solution here
function superbowlWin(record) {
    const win = record.find(game => game.result === "W");
    return win ? win.year : undefined;
  }
  const record = [
    { year: 1998, result: "W" },
    { year: 2005, result: "L" },
    { year: 2016, result: "W" },
  ];
  console.log(superbowlWin(record));
