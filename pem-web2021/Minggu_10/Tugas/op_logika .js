var nilaiA = 10;
var nilaiB = 8;
 var benar = nilaiA > nilaiB;
 var salah = nilaiA < nilaiB;
 // operator && (and)
 var hasil = benar && salah;
 document.write(`${benar} && ${salah} = ${hasil}<br/>`);
 
 // operator || (or)
 var hasil = benar || salah;
 document.write(`${benar} || ${salah} = ${hasil}<br/>`);
 
 // operator ! (not)
 var hasil = !benar;
 document.write(`!${benar} = ${hasil}<br/>`);

 var hasil = !salah;
 document.write(`!${salah} = ${hasil}<br/>`);