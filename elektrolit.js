const larutanSelect = document.getElementById("larutan");
const lampu = document.getElementById("lampu");
const hasil = document.getElementById("hasil");

larutanSelect.addEventListener("change", function () {
  const larutan = larutanSelect.value;
  let status = "";

  switch (larutan) {
    case "HCl":
    case "NaOH":
    case "H2SO4":
    case "KOH":
    case "NaCl":
      lampu.src = "terang.png";
      lampu.classList.add("nyala");
      status = "Larutan Elektrolit Kuat - Lampu Menyala Terang";
      break;
    case "CH3COOH":
    case "NH3":
      lampu.src = "redup.png";
      lampu.classList.add("nyala");
      status = "Larutan Elektrolit Lemah - Lampu Menyala Redup";
      break;
    case "C6H12O6":
    case "Urea":
    case "Air":
      lampu.src = "mati.png";
      lampu.classList.remove("nyala");
      status = "Non Elektrolit - Lampu Mati";
      break;
    default:
      lampu.src = "mati.png";
      lampu.classList.remove("nyala");
      status = "";
  }

  hasil.textContent = status;
});
