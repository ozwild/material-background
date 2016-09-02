var currentZIndez = 1; //We need to have a new Z-INDEX for each time we Randomize the starting with the lowest shape.
var currentColourStrength = 0; //show the colour strenght, might not use it - might do.
var items = [["#CE93D8","#BA68C8", "#AB47BC", "#9C27B0", "#8E24AA", "#7B1FA2"],[3,4],[5,6]];//First we will randomize a colour scheme.
var accents = ["blue", "something"]; //Then we randomize the accent colour.
var shapeTypes = ["left-rectangle", "circle-small"]; //Here is out list of shapes.
var circleCount = 0; // How many circles are in use??!?

function MDBStart() {
  var x = Math.floor((Math.random() * 8) + 6);
  for (var i = 0; i < x; i++) {
    var y = Math.floor((Math.random() * shapeTypes.length));
    MDBRandomize(shapeTypes[y]);
  }
}

function MDBRandomize(shapeType) { //Randomizing by shape type
  if (shapeType == "left-rectangle") { //if a rectangle needs doing.
    var b = Math.floor((Math.random() * 270) + 80);
    $( "#MDB" ).append( "<div style='width: " + b + "px; z-index: " + currentZIndez + ";' class='MDB-rectangle-left MDB-shadow-strong'></div>" );
    $('.MDB-rectangle-left').each(function() { //go through all rextangles and randomize their rotation.
        var a = Math.floor((Math.random() * 180) + 1);
        $(this).css('transform', 'rotate(' + a + 'deg)');
    });
    console.log(b);
  } else if (shapeType == "circle-small") {
    if (circleCount <= 0) {
      $( "#MDB" ).append( "<div style='z-index: " + (currentZIndez + 3) + ";' class='MDB-circle-small MDB-shadow-strong'></div>" );
      $('.MDB-circle-small').each(function() { //go through all circles and randomize their location.
          var b = Math.floor((Math.random() * 100) + 1);
          $(this).css('top', b + '%');
          var c = Math.floor((Math.random() * 100) + 1);
          $(this).css('left', c + '%');
      });
      circleCount++;
    } else {
      MDBRandomize("left-rectangle");
    }
  }
  currentZIndez = currentZIndez + 1;
};
