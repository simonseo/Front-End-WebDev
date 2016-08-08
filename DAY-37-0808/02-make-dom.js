/**
 * ⓒ Simon Seo, 2016
 */

var inte            = 33;
var made_div        = document.createElement('div');
var made_div_text   = document.createTextNode('division ahahahahah');
var made_ul         = document.createElement('ul');
var made_ul_li      = document.createElement('li');
var made_ul_li_text = document.createTextNode('list haahha');

console.log('div:'           , made_div);
console.log('ul:'            , made_ul);

console.log('made_div'       , made_div);
console.log('made_div_text'  , made_div_text);
console.log('made_ul'        , made_ul);
console.log('made_ul_li'     , made_ul_li);
console.log('made_ul_li_text', made_ul_li_text);

Object.prototype.prependChild = function (target_node) {
	this.insertBefore(target_node, this.firstChild);
};
