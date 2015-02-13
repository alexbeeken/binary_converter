var binary = function(decimal) {
  var i = 0;
  var output = ""
  for (var i = 0; i < 32; i++) {
    var power = Math.pow(2, i);
    if (decimal >= power) {
      decimal = decimal % power;
      output = output.concat("1");

    } else if (output !== "") {

      output = output.concat("0");

    } else if ((decimal === 0)) {
      output = output.concat("0");
    }
  };
  return output
};
