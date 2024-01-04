function hitungLuas() {
    var alas = parseFloat(document.getElementById('alas').value);
    var tinggi = parseFloat(document.getElementById('tinggi').value);


    if (alas <= 0 || tinggi <= 0 || isNaN(alas) || isNaN(tinggi)) {
        document.getElementById('hasilLuas').value = ' Masukkan nilai dengan benar ' ;
    } else {
        var luas = 0.5 * alas * tinggi;
        var hasilText = 'L = 1/2 x a x t\n';
        hasilText += 'L = 1/2 x ' + alas + ' x ' + tinggi + '\n';
        hasilText += 'L = ' + luas + '\n\n';
        hasilText += 'Jadi Luas dari Segitiga = ' + luas ;

        document.getElementById('hasilLuas').value = hasilText;
    }
}

function hitungkeliling() {
    var sisi_a = parseFloat(document.getElementById('sisi-a').value);
    var sisi_b = parseFloat(document.getElementById('sisi-b').value);
    var sisi_c = parseFloat(document.getElementById('sisi-c').value);

    if (sisi_a <= 0 || sisi_b <= 0 || sisi_c <= 0 || isNaN(sisi_a) || isNaN(sisi_b) || isNaN(sisi_c)) {
        document.getElementById('hasilkeliling').value = ' Masukkan nilai dengan benar ' ;
    } else {
        var keliling = sisi_a + sisi_b + sisi_c;
        var hasilText = 'K = A + B + C\n';
        hasilText += 'K = ' + sisi_a + ' + ' + sisi_b + ' + ' + sisi_c + '\n';
        hasilText += 'K = ' + keliling + '\n\n';
        hasilText += 'Jadi Keliling dari Segitiga = ' + keliling ;

        document.getElementById('hasilkeliling').value = hasilText;
    }
}

function hapusForm() {
    document.getElementById('alas').value = '';
    document.getElementById('tinggi').value = '';
    document.getElementById('sisi-a').value = '';
    document.getElementById('sisi-b').value = '';
    document.getElementById('sisi-c').value = '';
    document.getElementById('hasilLuas').value = '';
    document.getElementById('hasilkeliling').value = '';
}
