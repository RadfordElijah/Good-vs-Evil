// TODO: i think the problem is that the input is a string, not an arr like i thought
// TODO: i think it needs to be goodSideVals = [1, 2, 3, 4, 10] multiplied to goodSideArr = good.split("");

function goodVsEvil(good, evil){
  const goodArr = good.split(" ");
  const evilArr = evil.split(" ");

  let goodSide = [1, 2, 3, 3, 4, 10];
  let badSide = [1, 2, 2, 2, 3, 5, 10];

  for (let i in goodSide){
    goodSide[i] *= goodArr[i];
  };
  console.log(goodSide)

  for (let i in badSide){
    badSide[i] *= evilArr[i];
  };
  
  const goodSideTotal = goodSide.reduce((a, b) => a + b);
  const badSideTotal = badSide.reduce((a, b) => a + b);
  
  if (goodSideTotal > badSideTotal) {
    return 'Battle Result: Good triumphs over Evil';
  } else if (goodSideTotal < badSideTotal) {
    return 'Battle Result: Evil eradicates all trace of Good';
  } else {
    return 'Battle Result: No victor on this battle field';
  }
}

goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1'); // evil wins
goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0'); // good wins
goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0'); // no winner
