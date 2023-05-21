function jaudasvars(power, weight) {
    var ratio = power / weight;
    return ratio.toFixed(2);
  }

  function aprekinat() {
    var powerinput = document.getElementById("power").value;
    var weightinput = document.getElementById("weight").value;

    var power = parseFloat(powerinput);
    var weight = parseFloat(weightinput);

    if (isNaN(power) || isNaN(weight)) {
      document.getElementById("rezultats").textContent = "Nepareiza ievade, jāizmanto tikai cipari!";
    } else {
      var ratio = jaudasvars(power, weight);
      document.getElementById("rezultats").textContent = "Svars pret jaudu attiecība: " + ratio + " zs/kg";
    }
  }