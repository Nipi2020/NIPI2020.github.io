function checkkhodam(){
    const name = document.getElementById('nameInput').value.trim();
    const resultDiv = document.getElementById('result');

if (name === "") {
resultDiv.innerHTML = "<p style='color: red;' > Nama tidak boleh kosong!</p>";
return;
}

const khodamNames = [
    "kHODAM NAGA BELUT",
    " KHODAM KAKE ZEUS",
    "KHODAM MAHYONG"
];

const khodamPresent = Math.random() > 0.5;

if (khodamPresent) {
    const khodamName = khodamNames[Math.floor(Math.random() * khodamNames.length)];
   
    resultDiv.innerHTML = `<p style='color: green; '>${name}, Anda Memiliki ${khodamName} yang Melindungi anda!</p>`;

}else{
    resultDiv.innerHTML = `<p style='color: red;' >${name}, Maaf, Anda Tidak Memiliki Khodam.</p>`;
}



}