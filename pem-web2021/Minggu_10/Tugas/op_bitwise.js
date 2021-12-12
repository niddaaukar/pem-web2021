var nilaiX = 4;
 var nilaiY = 3;
 // operator bitwise and
 var hasil = nilaiX & nilaiY;
 document.write(`${nilaiX} & ${nilaiY} = ${hasil}<br/>`);
 // operator bitwise or
 var hasil = nilaiX | nilaiY;
 document.write(`${nilaiX} | ${nilaiY} = ${hasil}<br/>`);
// operator bitwise xor
var hasil = nilaiX ^ nilaiY;
document.write(`${nilaiX} ^ ${nilaiY} = ${hasil}<br/>`);
// operator negasi nilai x
var hasil = ~nilaiX;
document.write(`~${nilaiX } = ${hasil}<br/>`);
//negasi nilai y
var hasil = ~nilaiY;
document.write(`~${nilaiY } = ${hasil}<br/>`);

// operator bitwise right shift >>
var hasil = nilaiX >> nilaiY;
document.write(`${nilaiX} >> ${nilaiY} = ${hasil}<br/>`);

var hasil = nilaiY >> nilaiX;
document.write(`${nilaiY} >> ${nilaiX} = ${hasil}<br/>`);

// operator bitwise left shift <<
var hasil = nilaiX << nilaiY;
document.write(`${nilaiX} << ${nilaiY} = ${hasil}<br/>`);

var hasil = nilaiY << nilaiX;
document.write(`${nilaiY} << ${nilaiX} = ${hasil}<br/>`);

 // operator bitwise tree right shift  >>>
 var hasil = nilaiX >>> nilaiY;
 document.write(`${nilaiX} >>> ${nilaiY} = ${hasil}<br/>`);

 var hasil = nilaiY >>> nilaiX;
 document.write(`${nilaiY} >>> ${nilaiX} = ${hasil}<br/>`);