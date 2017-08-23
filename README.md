# material-background Generator
![Image of the material-background progress](http://i.imgur.com/6hwQlwA.png)
## About material-background
A Material Design background generator built in Javascript and CSS, import a random Material Design background into your website development work.
## Tested On
| Browser        | Version           | Works  |
| ------------- |:-------------:| -----:|
| Google Chrome      | 53 | ✅ |
| Microsoft Edge      | 25      |   ✅ |
| Firefox | 47      |    ✅ |
## How to Use
First as with any other jQuery plugin you are required to have jQuery avliable on your website, to do this simple place the code below just before the `</body>` tag. 
```
<script src="https://code.jquery.com/jquery-3.1.0.min.js"></script>
```
Now that you have done that you can need to add our Javascript file below the jQuery file, in this example we have downloaded the code and placed it in our JS folder.
```
<script src="js/material-background-scripts.js"></script>
```
To implement the stylesheet just place the `material-background-styles.css` script inside that of the `<head>` tag in your document.
```
<link rel="stylesheet" href="css/material-background-styles.css">
```
Finally, you are required to add the `materialBackground.start()` when you want the backgroud to be generated, and then add a `<div>` tag with the id of `material-background` to your website, like so: 
```
<div id="material-background">
</div>
```
## Current Goals
- [ ] Complete the implementation of colours, make it so they get darker the further out they are.
- [ ] More shapes, such as a triangle etc. Along with some other options of rectangles and larger circles.
- [ ] Top, Left, right or bottom decision making, needs to be consistent on that generation.
- [ ] Build a showcase website that allows users to download and save as images.
