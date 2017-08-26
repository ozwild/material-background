var materialBackground = {
    currentZIndex: 10,
    currentColorStrength: 0,
    colors: [["#ffebee","#ffcdd2","#ef9a9a","#e57373","#ef5350","#f44336","#e53935","#d32f2f","#c62828","#b71c1c"],
            ["#fce4ec","#f8bbd0","#f48fb1","#f06292","#ec407a","#e91e63","#d81b60","#c2185b","#ad1457","#880e4f"],
            ["#f3e5f5","#e1bee7","#ce93d8","#ba68c8","#ab47bc","#9c27b0","#8e24aa","#7b1fa2","#6a1b9a","#4a148c"],
            ["#ede7f6","#d1c4e9","#b39ddb","#9575cd","#7e57c2","#673ab7","#5e35b1","#512da8","#4527a0","#311b92"],
            ["#e8eaf6","#c5cae9","#9fa8da","#7986cb","#5c6bc0","#3f51b5","#3949ab","#303f9f","#283593","#1a237e"],
            ["#e3f2fd","#bbdefb","#90caf9","#64b5f6","#42a5f5","#2196f3","#1e88e5","#1976d2","#1565c0","#0d47a1"],
            ["#e1f5fe","#b3e5fc","#81d4fa","#4fc3f7","#29b6f6","#03a9f4","#039be5","#0288d1","#0277bd","#01579b"],
            ["#e0f7fa","#b2ebf2","#80deea","#4dd0e1","#26c6da","#00bcd4","#00acc1","#0097a7","#00838f","#006064"],
            ["#e0f2f1","#b2dfdb","#80cbc4","#4db6ac","#26a69a","#009688","#00897b","#00796b","#00695c","#004d40"],
            ["#e8f5e9","#c8e6c9","#a5d6a7","#81c784","#66bb6a","#4caf50","#43a047","#388e3c","#2e7d32","#1b5e20"],
            ["#f1f8e9","#dcedc8","#c5e1a5","#aed581","#9ccc65","#8bc34a","#7cb342","#689f38","#558b2f","#33691e"],
            ["#f9fbe7","#f0f4c3","#e6ee9c","#dce775","#d4e157","#cddc39","#c0ca33","#afb42b","#9e9d24","#827717"],
            ["#fffde7","#fff9c4","#fff59d","#fff176","#ffee58","#ffeb3b","#fdd835","#fbc02d","#f9a825","#f57f17"],
            ["#fff8e1","#ffecb3","#ffe082","#ffd54f","#ffca28","#ffc107","#ffb300","#ffa000","#ff8f00","#ff6f00"],
            ["#fff3e0","#ffe0b2","#ffcc80","#ffb74d","#ffa726","#ff9800","#fb8c00","#f57c00","#ef6c00","#e65100"],
            ["#fbe9e7","#ffccbc","#ffab91","#ff8a65","#ff7043","#ff5722","#f4511e","#e64a19","#d84315","#bf360c"],
            ["#efebe9","#d7ccc8","#bcaaa4","#a1887f","#8d6e63","#795548","#6d4c41","#5d4037","#4e342e","#3e2723"],
            ["#fafafa","#f5f5f5","#eeeeee","#e0e0e0","#bdbdbd","#9e9e9e","#757575","#616161","#424242","#212121"],
            ["#eceff1","#cfd8dc","#b0bec5","#90a4ae","#78909c","#607d8b","#546e7a","#455a64","#37474f","#263238"]],
    shapes: ["left-rectangle", "right-rectangle", "circle-small", "circle-large"],
    circleCount: 0,
    nightTheme: false,
    simpleTheme: false,

    start() { //This is how we re-start it etc.
        $("#material-background").empty();
        this.circleCount = 0;
        this.currentZIndex = 1;
        this.currentColorStrength = 0;
        
        var rColorChoice = Math.floor((Math.random() * this.colors.length));
        $("#material-background").css("background-color", this.colors[rColorChoice][2]);
        var rDarknessColor = Math.floor((Math.random() * 8) + 3);
        this.drawSecondaryBackground(this.colors[rColorChoice][1]);
        
        var rNightThemeChoice = Math.floor((Math.random() * 4) + 1);
        if (rNightThemeChoice == 1) {
            this.nightTheme = true;
            $("#material-background").css("background-color", "#121212");
        } else if (rNightThemeChoice == 2) {
            this.simpleTheme = true;
            $("#material-background").css("background-color", "#f2f2f2");
        }
        
        
        ///REWRITING THIS LOOP SOON TO BE MORE EFFECTIVE.
        
        
        var rShapeCount = Math.floor((Math.random() * 5) + 3); //Generate a random number.
        for (var i = 0; i < rShapeCount; i++) { //For each random No. we can apply a shape from the array.
            var rShapeSize = Math.floor((Math.random() * this.shapes.length));
            this.randomize(this.shapes[rShapeSize], rColorChoice, rDarknessColor);
            this.currentZIndex++;
        }
    },
    
    drawSecondaryBackground(color) {
        var rSecondaryBackground = Math.floor((Math.random() * 3));
        if (rSecondaryBackground == 1){
            var b = Math.floor((Math.random() * 60) + 30);
            var c = Math.floor((Math.random() * 30) + 10);
            var skewLevel = Math.floor((Math.random() * 20) + -20);
            $("#material-background").append("<div style='background-color: " + color + "; left: " + c + "%; width: " + b + "%; transform: skew(" + skewLevel + "deg); -webkit-transform: skew(" + skewLevel + "deg);' class='material-parallelogram material-shadow-low'></div>");
        } 
    },
    
    randomize(shapeType, colorChoice, darkness) { //Randomizing by shape type
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
                $(this).css("background-color", materialBackground.colors[colorChoice][darkness]);
            });
        } else if (shapeType == "right-rectangle") { //if a rectangle needs doing.
            var shadowStrength = "strong";
            var rShadowLevels = Math.floor((Math.random() * 3) + 0);
            if (this.currentZIndez >= 5 && rShadowLevels == 2) {
                shadowStrength = "strongest";
            }
            var b = Math.floor((Math.random() * 270) + 80);
            $("#material-background").append("<div style='width: " + b + "px; z-index: " + this.currentZIndez + ";' class='material-rectangle-right material-shadow-" + shadowStrength + "'></div>");
            $('.material-rectangle-right').each(function () { //go through all rextangles and randomize their rotation.
                var a = Math.floor((Math.random() * 180) + 1);
                $(this).css('transform', 'rotate(' + a + 'deg)');
                $(this).css("background-color", materialBackground.colors[colorChoice][darkness]);
            });
        } else if (shapeType == "circle-large") {
            if (this.circleCount <= 0) {
                $("#material-background").append("<div class='material-circle-large material-shadow-strongest'></div>");
                $('.material-circle-large').each(function () { //go through all circles and randomize their location.
                    var b = Math.floor((Math.random() * 90) + 1);
                    $(this).css('top', b + '%');
                    var c = Math.floor((Math.random() * 90) + 1);
                    $(this).css('left', c + '%');
                    var rAColorChoice = Math.floor((Math.random() * materialBackground.colors.length));
                    $(this).css("background-color", materialBackground.colors[rAColorChoice][8]);
                });
                this.circleCount++;
            } else {
                this.randomize("left-rectangle", colorChoice, darkness); //At the moment dont want too many circles, we will create more rectangles for now.s
            }
        } else if (shapeType == "circle-small") {
            if (this.circleCount <= 0) {
                $("#material-background").append("<div class='material-circle-small material-shadow-strongest'></div>");
                $('.material-circle-small').each(function () { //go through all circles and randomize their location.
                    var b = Math.floor((Math.random() * 90) + 1);
                    $(this).css('top', b + '%');
                    var c = Math.floor((Math.random() * 90) + 1);
                    $(this).css('left', c + '%');
                    var rAColorChoice = Math.floor((Math.random() * materialBackground.colors.length));
                    $(this).css("background-color", materialBackground.colors[rAColorChoice][8]);
                });
                this.circleCount++;
            } else {
                this.randomize("left-rectangle", colorChoice, darkness); //At the moment dont want too many circles, we will create more rectangles for now.s
            }
        }
    }
};
