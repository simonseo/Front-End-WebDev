######Front End Web Development School

#Simon's HTML, CSS, Markdown Style Guide
*the guide provided here is for my own personal use and is still work in progress.
##HTML, CSS, Markdown common
###File Management
1. Each project is given its own folder in which there exist the following.
	1. README file (.md if this project is to be uploaded on GitHub, any other file format if not) that explains what the project strives to achieve, the date of project progress, and issues or direction of development. If this project allows other people's participation either as contributor or user, specific details about how it can be done should be noted.
	1. Resources folder which will include any sourcecode files that are used frequently and commonly throughout different parts of the project. Inside this folder, structure as necessary. Examples are grid, font, initialization, etc.
	1. Assets folder which will include any other (non-sourcecode) files that are used commonly throughout the project or any files that simply don't fit in anywhere. Examples are logos, design layout psds, simon's birthday photo, fonts, etc. This can be used as a trash bin.
	1. Submodule folders which will each have their own folders named img and css.
1. Aside from the common folders which can have generic names, each file and folder should have names that are self-explanatory on what their roles are. When in need of using spaces or special characters in names, it is recommended to replace them with hyphens.


##HTML
###HTML5
1. Use HTML5 syntax and doctype (`<!DOCTYPE html>`). It is important to abide by Web Standards, to markup symantically, to follow Web Accessibility guidelines, and to be practical. If there comes a trade off situation, value them in the following order
	1. Follow Web Accessibility Guidelines
	1. Be Practical. Do what must be done.
	1. Markup symantically
	1. Follow Web Standards

###Positioning of HTML fundamental elements
1. Template guide adapted from [Matej Janovcik](http://stackoverflow.com/users/763948/matej-janov%c4%8d%c3%adk)'s template. The most fundamental points are to keep the meta elements `http-equiv` and `charset` before the title, and to load the stylesheet as early as possible. Other meta elements and script elements can be placed where deemed necessary.

	```html
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">

		<title>Document</title>

		<meta name="description" content="">
		<meta name="keywords" content="">
		<meta name="author" content="">

		<meta name="robots" content="index, follow">
		<meta name="mobile-web-app-capable" content="yes">
		<meta name="apple-mobile-web-app-capable" content="yes">
		<meta name="apple-mobile-web-app-status-bar-style" content="default">

		<link rel="stylesheet" href="css/style.css">

		<meta property="fb:page_id" content="">
		<meta property="og:title" content="">
		<meta property="og:image" content="">
		<meta property="og:description" content="">
		<meta property="og:url" content="">
		<meta property="og:site_name" content="">
		<meta property="og:type" content="website">

		<meta name="twitter:card" content="summary">
		<meta name="twitter:url" content="">
		<meta name="twitter:title" content="">
		<meta name="twitter:description" content="">
		<meta name="twitter:image" content="">
		<meta name="twitter:site" content="">
		<!-- <script src="js/vendor/jquery.js"></script> -->
		<!-- <script></script> -->
	</head>
	<body>
		<!-- <script src="js/vendor/jquery.js"></script> -->
		<!-- <script></script> -->
	</body>
	</html>
	```

###Line breaks and indentation


line break
class naming

