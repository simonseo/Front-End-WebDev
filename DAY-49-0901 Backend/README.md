

규모가 생기면 데이터베이스 관리자와 백엔드 개발자를 따로 뽑는다. 

##Understanding Back End 백엔드에 대한 이해


Web Server - Static files that handle HTTP requests and provides files like HTML, CSS, JS, images
Application Server - Where scripts run
DB Server - Where mass data is saved and manipulated.

### 웹 개발 패턴의 변화

- 1991 ~ 1999: Sir Timothy John "Tim" Berners-Lee가 하이퍼텍스트 기반의 프로젝트를 제안한 이후 정적인 컨텐츠들을 중심으로 한 웹 기술이 발달
- 1999 ~ 2009: LAMP (Linux, Apache, Mysql, Php) 중심의 동적인 서버, 정적인 클라이언트 모델이 지속됨
- 2010 ~ 현재: Javascript!! (Dynamic Web Client) Javascript's enhancement and rise de to Google's V8 engine. 

###Languages and Frameworks
PHP (Laravel) Gone. Poof. Except for Wordpress. FB used to use PHP.
Java (Spring) Runs on JVM
C#/C++ (asp.net) ActiveX requires this. `.NET` is gone from the market now because we don't need a framework to approach anymore
Ruby (RoR) Very popular around 10 years ago. Very simple syntax - bad for extension
Python (Django, Flask, Pyramid) Simple but very extensible. Flask is good for prototyping. Django started as CMS (contents managing system) like wordpress.
Go (Gorilla, Beego) From Google. Still in 과도기. In a power struggle

###MEAN Stack - MVC
We'll learn about MEAN Stack - MongoDB, Express.js, AngularJS, Node.js without `M`.
All JavaScript except MongoDB. 
![](http://res.cloudinary.com/meshfields/image/upload/v1418290557/mean-stack-mean-detail_bkepvb.png)


#### URL, URN, URI

- URI: Uniform Resource Identifier
(http://www.example.com/people?id=29764825)
- URL: Uniform Resource Locator. Everything up to 
(http://www.example.com/people)
- URN: Uniform Resource Name. This is gaining importance because it's easier to query using a crawler, simply by changing the number. No need to know the post name or URL.
(urn: id=29764825)

###License
These are not super enforced on to opensource devs.
- GPL(GNU(GNU is Not Unix) Public License): You can use for free, but you need to opensource your code, and you need to use GPL
- MIT License: open for almost everything
- FreeBSD: Similar to MIT, you can claim ownership for the code. If someone makes money out of this code, the money partially belongs to the author
- NPM

##How do they work

###Developmenet Environmen
- node: package.json, nvm
- django: requirements.txt, pyenv, virtualenv, autoenv,
- shell: bash - zsh - oh-my-zsh - (theme)agnoster

###Git


###REST API
REpresentation Safe Transfer API - safe and communicable way to transfer your data.

| Distinction |   |       |       |       |
|:--------|:------|:------|:------|:------|
|CRUD	  |Create |Read   | Update| Delete|
|HTTP/REST|Post   |Get    | Put   | Delete|
|SQL	  |INSERT |SELECT | UPDATE| DELETE|



- 버전관리 https://api.foo.com/v1/bar
- 명사형 사용 https://foo.com/showid/ --> https://foo.com/user/
	- A page should be named with a noun. Sign up page should not be named `create user`, but `new user`
- 반응형 https://foo.com/m/user/, https://m.foo.com/user/ (x)
	- Continuity is important
- 언어코드 https://foo.com/kr/, https://kr.foo.com/ (x)
	- don't create separate pages for different languages. Make the page detect it.
- 응답상태 코드 (200, 400, 500)
	- Separate page for each error codes. This gets higher scores for CEO

#### Dashboard

- **Admin**: Built-in or 3rd party
- **Google Analytics**: general
- **Firebase Analytics**: **hot**

###PRocess

`AWS` (lot of service. eg. Solution Architect at each branch giving advice) or `.NET`+`Azure` (.NET Used to be favored for games, but now they moved to AWS. Azure is trying to bring them back.)
1. EC2 node server. You can increase or decrease instance
1. S3 static files (like naver cloud) web server
1. Cloud directs work to servers?


### First Node application

```sh
$ touch app.js
$ npm init
$ vi app.js
$ git init
$ git add .
$ git commit
$ git push -u origin
```

```js
var http = require("http");
//http Status(200): OK, send response "hello world"
http.createServer(function(request, response){
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write("hello world \n");
    response.end();
}).listen(3030);

//3030 -> process.env.PORT (c9.io)
console.log("Server is running at localhost:3030");
```

###Routing
Giving response to whatever request given.
You should name paths with meaningful English, using hyphens for spaces.
