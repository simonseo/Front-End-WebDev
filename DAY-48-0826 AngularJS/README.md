######Front End Web Development School

##LocalStorage
A cache method that can store data of around 5MB per website on the user's browser.

```js
localStorage.getItem(key);
localStorage.removeItem(key); 		//removes specific item
localStorage.setItem(key, value);
localStorage.key(index);      		//gets key for the given index
localStorage.clear();         		//removes all
```

offline cache
manifest

JSON doesn't allow commas at the end of a map
JavaScript does.
But try not to leave any.

AngularJS

Bottstrap process
1. angularJS exection
	DOMContent Loaded event
	readystate complete
21. ngApp directive search auto-bottstrap (+module)
1. $injector creates #Compile / $rootScope
1. creates a Dynamic DOM and creates View

Directives
ngApp specifies that this is a ng app and you can specify which module.
ng-init `<h2 data-ng-init="application_name='My app using angularjs.'"></h2>`
ngModel `<input type="text" data-ng-model="two_way_binding">` on an input. This becomes the model, which will read the data
ngBind `<p data-ng-bind="two_way_binding"></p>` or `<p>{{two_way_binding}}</p>` on a p will bind the data to the p.
`<p>{{application_name}}</p>`

Uses two way binding to update view from model and model from view

MVC MVT MVVM? just MVWhatever
$scope object updates view and model simultaneously. 
Controllers don't know each other. Factory takes care of communication between them

###Factories/Services
 - used for RESTful 서비스에 사용. Controller 사이 데이터 공유에 사용. Controller가 무슨 변화가 생기면 service의 model을 바꿔주고 그걸 다른 controller가 접근할 수 있음 사용자 정의 로직에 사용, 싱글톤 객체. include $http which handles all AJAX.

Service is made of several factories. 
- Provider
- Factory
- Service
- Constant
- Value

###Controller
the brain that manipulates data(model) and view. Uses Factory/service (all service names start with $ sign) to search and store data. Event Handling by view. Connects to view through $scope (controller-$scope-view). Without the services, controller cannot manipulate view.

####$scope
A service. Mediator. It is injected into controller. It takes to role of VM (ViewModel)



###View
renders UI, including HTML and CSS. Uses ng-directives to extend HTML. -> leads to new standard "web component". Includes {{expression}}. Includes filter.  Template

####Directives
try to write "data-" in the front if you use it as attributes. You can also use directives in the form of element tags.

1. DOM manipulation
	- ngShow - shows stuff if condition evaluates to true
	- ngHide
	- ngView - inserts data into view?
	- ngRepeat - for loop
	- ngCloack - hides FOUC (flash of unstyled content, while loading content)
	- ngSwitch - shows or hides according to the switch value of parent

2. Modules/ Controllers
	- ngApp - template assignment attribute
	- ngController

3. Data Binding
	- ngInit - 잘 안씀
	- ngModel - form validation 
	- ngBind (also expression using double curly braces)

4. Events
	- ngClick
	- ngMouseenter
	- ngKeydown

####Filter
Sorting, 
Formatting data, 
Filteridng data with Pipe (|)


Routes - 연결 주소(address???, usually has hash: `#/path` because it means )에 컨트롤러와 뷰를 연결. You can add route parameters. kinda like url(???) Calls view and controller necessary for this address. 
defines how the views are displayed in which order. 

###Module - can be anything
Define & get module

```js
var setNgApp = angular.module('ngApp', [module1, moduel2, ...]);
var getNgApp = angular.module('ngApp');
```