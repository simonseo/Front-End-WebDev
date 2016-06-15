###### Front-End Development School

# TIL Day 1 복습

*Set up my own GitHub blog*
See it [here](simonseo.github.io)
It'll be used as my blog/website/resume

*Auto indent HTML (and perhaps other languages) in Sublime Text 3*
1. Command Palette (ctrl+shift+P) > Indentation: Reindent Lines
1. Edit > Line > Reindent

*Only <head> and <body> can be children elements of <html>* comments are chil

*See that IE _actually_ has compatibility issues with/without certain tags*

*!!!4t* which gives ```<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">``` is rendered standard. Check by opening console window and type in `document.compatMode`

*Comment above DTD (Doctype?)* is ALWAYS quirk in IE. Not always in other browsers. 

`lang="ko-KR"` can be placed in any element.

*Render with newest engine in IE* `meta:compat => <meta http-equiv="X-UA-Compatible" content="IE=Edge">`

*[viewport](http://aboooks.tistory.com/352)* ```<meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- if you have a wing of size 40px and the 본문 is 1200px, and you want to show the wings, then you should not set width as device-width(which is by default 960?) but instead write 1240px -->```

*keyword* element is not considered by Google's search engine algorithm. It is however used by other websites.

*link element* always has to be inside head. *NOT BODY*



# TO DO
Read about http-equiv (https://www.w3.org/TR/html5/document-metadata.html#attr-meta-http-equiv)
Read about UTF-8 [Wiki](https://ko.wikipedia.org/wiki/UTF-8)
[See](http://naradesign.net/wp/2007/03/27/118/) which are actually Standard Mode or Quirk Mode
What is DTD?
