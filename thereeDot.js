const ages = [11,17,14,18];
const ages2 = [15,16,17,18,];
const allAges = ages.concat(ages2);
const allAges2 = [...ages, ...ages2]
// 

const business = 750;
const minister = 850;
const sochib = 650;
const takaPoisha = [750, 850, 650];
const maximum = Math.max(...takaPoisha);
console.log (maximum);