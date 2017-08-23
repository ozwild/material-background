var materialBackground = {
    currentZIndex: 1,
    currentColorStrength: 0,
    colors: [["#CE93D8", "#BA68C8", "#AB47BC", "#9C27B0", "#8E24AA", "#7B1FA2"], ["#9fa8da", "#5c6bc0", "#3f51b5", "#303f9f", "#283593", "#1a237e"], ["#ffe0b2", "#ffcc80", "#ffb74d", "#ff9800", "#f57c00", "#e65100"]],
    shapes: ["left-rectangle", "circle-small", "circle-large"],
    circleCount: 0,
    nightTheme: false,
    simpleTheme: false,

    start() { //This is how we re-start it etc.
        $("#material-background").empty();
        this.circleCount = 0;
        this.currentZIndex = 1;
        this.currentColorStrength = 0;
        var rColorChoice = Math.floor((Math.random() * 3));
        $("#material-background").css("background-color", this.colors[rColorChoice][2]);
        var rNightThemeChoice = Math.floor((Math.random() * 4) + 1);
        if (rNightThemeChoice == 1) {
            this.nightTheme = true;
            $("#material-background").css("background-color", "#121212");
        } else if (rNightThemeChoice == 2) {
            this.simpleTheme = true;
            $("#material-background").css("background-color", "#f2f2f2");
        }
        var rShapeCount = Math.floor((Math.random() * 5) + 3); //Generate a random number.
        for (var i = 0; i < rShapeCount; i++) { //For each random No. we can apply a shape from the array.
            var rShapeSize = Math.floor((Math.random() * this.shapes.length));
            this.randomize(this.shapes[rShapeSize], rColorChoice);
            this.currentZIndex++;
        }
    },

    randomize(shapeType, colorChoice) { //Randomizing by shape type
        if (shapeType == "left-rectangle") { //if a rectangle needs doing.
            var shadowStrength = "strong";
            var rShadowLevels = Math.floor((Math.random() * 3) + 0);
            if (this.currentZIndez >= 5 && rShadowLevels == 2) {
                shadowStrength = "strongest";
            }
            var b = Math.floor((Math.random() * 270) + 80);
            $("#material-background").append("<div style='width: " + b + "px; z-index: " + this.currentZIndez + ";' class='material-rectangle-left material-shadow-" + shadowStrength + "'></div>");
            $('.material-rectangle-left').each(function () { //go through all rextangles and randomize their rotation.
                var a = Math.floor((Math.random() * 180) + 1);
                $(this).css('transform', 'rotate(' + a + 'deg)');
                $(this).css("background-color", materialBackground.colors[colorChoice][3]);
            });
            console.log(b);
        } else if (shapeType == "circle-large") {
            if (this.circleCount <= 0) {
                $("#material-background").append("<div style='z-index: " + (this.currentZIndez + 30) + ";' class='material-circle-large material-shadow-strongest'></div>");
                $('.material-circle-large').each(function () { //go through all circles and randomize their location.
                    var b = Math.floor((Math.random() * 100) + 1);
                    $(this).css('top', b + '%');
                    var c = Math.floor((Math.random() * 100) + 1);
                    $(this).css('left', c + '%');
                });
                this.circleCount++;
            } else {
                this.randomize("left-rectangle", colorChoice); //At the moment dont want too many circles, we will create more rectangles for now.s
            }
        } else if (shapeType == "circle-small") {
            if (this.circleCount <= 0) {
                $("#material-background").append("<div style='z-index: " + (this.currentZIndez + 30) + ";' class='material-circle-small material-shadow-strongest'></div>");
                $('.material-circle-small').each(function () { //go through all circles and randomize their location.
                    var b = Math.floor((Math.random() * 100) + 1);
                    $(this).css('top', b + '%');
                    var c = Math.floor((Math.random() * 100) + 1);
                    $(this).css('left', c + '%');
                    var rAColorChoice = Math.floor((Math.random() * 3));
                    if (rAColorChoice == 2) {$(this).css("background-color", materialBackground.colors[rAColorChoice][4])};
                });
                this.circleCount++;
            } else {
                this.randomize("left-rectangle", colorChoice); //At the moment dont want too many circles, we will create more rectangles for now.s
            }
        }
    }
};
