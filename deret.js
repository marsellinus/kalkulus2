function generateSequence() {
  var sukuPertama = parseFloat(document.getElementById('sukuPertama').value);
  var beda = parseFloat(document.getElementById('Beda').value);
  var sukuKeN = parseFloat(document.getElementById('SukuKeN').value);
  var choise = document.getElementById('choise').value;
  var result = '';

  if (choise === 'baris') {
      for (var i = 1; i <= sukuKeN; i++) {
          var nilai = sukuPertama + (i - 1) * beda;
          result += nilai + ", ";
      }
  } else if (choise === 'deret') {
      var jumlahDeret = (sukuKeN / 2) * (2 * sukuPertama + (sukuKeN - 1) * beda);
      result = "Jumlah deret aritmatika: " + jumlahDeret;
  }

  document.getElementById('sequenceResult').innerHTML = result;
}
