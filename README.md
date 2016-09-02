# MDBackground
![Image of the MDBackground progress as of 0.0.1](http://i.imgur.com/gk3ZmBR.png)
## About MDBackground
A Material Design background generator built in Javascript and CSS, import a random Material Design background into your website development work.
## How to Use
First as with any other jQuery plugin you are required to have jQuery avliable on your website, to do this simple place the code below just before the `</body>` tag. 
```
<script   src="https://code.jquery.com/jquery-3.1.0.min.js"></script>
```
Now that you have done that you can need to add our Javascript file below the jQuery file, in this example we have downloaded the code and placed it in our JS folder.
```
<script src="js/MDBackground-scripts.js"></script>
```
To implement the stylesheet just place the `MDBackground-styles.css` script inside that of the `<head>` tag in your document.
```
<link rel="stylesheet" href="css/MDBackground-styles.css">
```
Finally, you are required to add the `MDBStart()` when you want the backgroud to be generated, and then add a `<div>` tag with the id of `MDB` to your website, like so: 
```
<div id="MDB">
</div>
```
