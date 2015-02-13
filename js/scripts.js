var binary = function(decimal) {
  var i = 0;
  var output = ""
  for (var i = 27; i >= 0; i--) {
    var power = Math.pow(2, i);
    if (decimal >= power) {
      decimal = decimal % power;
      output = output.concat("1");
    } else if (output !== "") {
      output = output.concat("0");
    } else if ((decimal === 0) && (i === 0)) {
      output = output.concat("0");
    }
  };
  return output
};

var hex = function(decimal) {
  var conversion = ({0: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "a", 11: "b", 12: "c" , 13: "d", 14: "e", 15: "f"});
  var output = "";
  output = output.concat(conversion[decimal]);
  return output;
};




$(document).ready(function() {
  $("form#decimal").submit(function(event) {
    $("#output").text("");
    var decimal = $("input#decimal").val();
    var result = binary(decimal);

    $(".result").text(result);

    $(".result").show();
    event.preventDefault();
  });
});
