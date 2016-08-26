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

Factories/SErvices - used for RESTful 서비스에 사용. Controller 사이 데이터 공유에 사용, 사용자 정의 로직에 사용, 싱글톤 객체. include $http which handles all AJAX.

Controller - the brain that manipulates data(model)/view. Uses Factory/service to search and store data. Event Handling by view. Connects to view through $scope (controller-$scope-view).

View - renders UI, including HTML and CSS. Uses directives to expand HTML. -> leads to new standard "web component"

Routes - 연결 주소(address???, usually has hash: `#/path` because it means )에 컨트롤러와 뷰를 연결. You can add route parameters. kinda like url(???) Calls view and controller necessary for this address. 
