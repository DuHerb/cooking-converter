var gallons2liters = function(gallons) {
  var gallons = parseFloat(prompt("How many gallons?"));
  alert(gallons + " gallons is equal to " + (gallons*3.78541).toPrecision(4) + " liters.");
}

gallons2liters();

var dkgToCup = function(dkg) {
  var dkg = parseFloat(prompt("How many dkg?"));
  alert(dkg + " dkg equals to " + (dkg*0.080).toPrecision(3) + " US cups.");
}

dkgToCup();
