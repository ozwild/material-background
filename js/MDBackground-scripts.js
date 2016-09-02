var currentZIndez = 1; //We need to have a new Z-INDEX for each time we Randomize the starting with the lowest shape.
var currentColourStrength = 0; //show the colour strenght, might not use it - might do.

function MDBStart() {
  //First we will randomize a colour scheme.
  //Then we randomize the accent colour.
  //Randomize shape layout Max 3 of each type of shape, up to a max of 10 shapes. Prefer to be between 6-8.
  //Then we generate the shapes for each one.
}

function MDBRandomize(shapeType) { //Randomizing by shape type
  if (shapeType == "left-rectangle") { //if a rectangle needs doing.
    $( "#MDB" ).append( "<div style='z-index: " + currentZIndez + ";' class='MDB-rectangle-left MDB-shadow-strong'></div>" );
    $('.MDB-rectangle-left').each(function() { //go through all rextangles and randomize their rotation.
        var a = Math.floor((Math.random() * 180) + 1);
        $(this).css('transform', 'rotate(' + a + 'deg)');
    });
  } else if (shapeType == "circle-small") {
    $( "#MDB" ).append( "<div style='z-index: " + currentZIndez + ";' class='MDB-circle-small MDB-shadow-strong'></div>" );
    $('.MDB-circle-small').each(function() { //go through all rextangles and randomize their rotation.
        var b = Math.floor((Math.random() * 100) + 1);
        $(this).css('top', b + '%');
        var c = Math.floor((Math.random() * 100) + 1);
        $(this).css('left', c + '%');
    });
  }
  currentZIndez = currentZIndez + 1;
};
