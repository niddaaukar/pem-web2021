      var jawab = prompt("Kamu beruntung! Silahakn pilih hadiahmu dengan memasukan angka 1 sampai 5");
       var hadiah = "";
 
       switch(jawab){
       case "1":
       hadiah = "Rumah";
       break;
       case "2":
       hadiah = " 2 tiket haji untuk orang dewasa";
       break;
       case "3":
       hadiah = "Mobil";
       break;
       case "4":
       hadiah = "Handphone";
       break;
       // break digunakan agar struktur CASE langsung berhenti jika kondisi telah terpenuhi 
       case "5":
       hadiah = " uang 500 juta";
       break;
       //default sebagai alternatif bila nilai variabel tidak ada yg cocok/sama dengan case diatas.
       //khusus default tidak perlu menggunakan break, karena default sudah terletak diakhir.
       default:
       document.write("<p> pilih angka 1-5</p> <br>");
        }
       if(hadiah === ""){
       document.write("<p>Yahh...gagal mendapatkan hadiah</p>");
       } else {
      document.write("<h2>Yeyyy kamu mendapatkan " + hadiah +"</h2>");
      }
