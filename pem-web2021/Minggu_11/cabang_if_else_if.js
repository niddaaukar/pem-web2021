      var nilai = prompt("Inputkan nilai akhir mahasiswa :");
      var grade = "";
      var hasil = "";
            if (nilai >= 90){
            grade = "A"
            } else if(nilai >= 80) {
            grade = "B+"
            } else if(nilai >= 70) {
            grade = "B"
            } else if(nilai >= 60) {
            grade = "C+"
            } else if(nilai >= 50) {
            grade = "C"
            } else if(nilai >= 40) {
            grade = "D"
            } else if(nilai >= 30) {
            grade = "E"
            } else { 
            grade = "F";
            }
            alert ( " Nilai Mahasiswa" + nilai + "grade anda" + grade);
            if (grade == "A" ){
            hasil = "Anda lulus dengan pujian";
            } else if (grade == "B"){
            hasil = "Anda lulus";
            } else if ( grade == "C") {
            hasil = "Remidi";
            } else {
             hasil = " Mohon maaf anda tidak lulus, harap belajar lebih giat lagi ya... "
            }
            alert("Nilai akhir anda : " + hasil);
