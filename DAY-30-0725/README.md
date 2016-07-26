css custom variables var()
--*

html custom data
data-*
dataset

using strings: interpolation `#{$family}` or unquote `unquote("calc(100% - 10px)")`


```sass
@import foo.css
@import foo2
@import http://foo.com/bar
@import url(foo)
```
compiles to
```css
@import url(foo.css);
@import "http://foo.com/bar";
@import url(foo);
```

foo2 has the extension `.sass` and foo `.css`. If you name the two with the same name, the compiler will probably throw an error.

Extend does not copy & paste the code. It adds the target selector to the original snippet.

Sass allows hyphen `-` and underscore `_` to be treated the same. You can use `$my-nickname` and `$my_nickname` to mean the same thing.