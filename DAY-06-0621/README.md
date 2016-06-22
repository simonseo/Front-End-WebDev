###### Front End Web Development School 
#웹디자인의 역사
1. **웹의 시작** (1989)

	Used CLI (Command Line Interface). No visual design at all. Maybe using spaces and special characters.

2. **Table** - beginning of visual web design 그리드 디자인 (1995)
	>테이블을 이용하면 잡지 형태의 디자인이 가능하다!
	-데이빗 시겔

	CSS가 있었지만 브라우저에서 호환 해주지 않음. 게다가 플래시가 강력해서 잘 안 쓰임.

3. **자바스크립트의 등장** (1995)

	웹이 동적이게 변함. 현재에 와서는 CSS가 자바스크립트의 애니메이션 부분은 대체하고 있음.

4. **플래시** - 자유로운 표현력 (1996)

	예술적인 측면이 강해서 화려했지만 느려졌고, 접근성은 낮고, 검색엔진에 좋지 않고, CPU 점유율이 너무 높았다. 비주얼 디자이너를 열광시켰지만, 웹 UI 디자인에 있어서는 암흑기였다.

5. **CSS** (1998)

6. **그리드 & 프레임워크 디자인** (2007)

	프레임워크 (조립식);
	그리드 (960 그리드시스템을 와이드스크린에서는 12단을 모두 보여주고, 모바일에서는 3개를 - 반응형이라는건가?)

7. **반응형 웹 디자인** (2010)
	AJAX와 마찬가지로, 새로 나온 기술은 아니었음. 

8. **플랫 디자인** (2010)
	계속 리얼리즘으로 가던 도중 기기 화면이  다양해지면서 스큐어모피즘이 ㅂ버려짐.

#웹 환경

#####웹은 요청과 응답의 연속이다
```
클라이언트 - OS - 브라우저 - 서버
```
클라이언트는 사용자 혹은 사용자의 단말기를 말한다. 크로스브라우저, 크로스플랫폼 시대에는 정확히 똑같이 보여주기 어렵기 때문에 내용과 내용의 구조화가 더 중요해진다.

#####서버
URL (IP:Port) Port is 80 by default so it doesn't need to be specified. There are several different types of ports, namely Webserver(80), FTP(21), database(mysql:3306), DNS(1023,53), ssh(22), email(110,25,143).

#####요청
- `GET`: 정보를 서버로부터 가져옴 `.php?id=314134&user_id=3491&page=3` : 특정 id 등을 서버에 보내고, 그에 상응하는 내용을 가져옴. 검색에 좋고 form에는 별로다.
- `POST`: 정보를 수정/입력하는 요청

>싱글페이지 애플리케이션 기술로는 서버로의 요청이 별도로 필요없어진다.

#####웹 호스팅
네트워크에 연결되어있는 컴퓨터를 호스트라고 부른다. 호스팅 서비스라는 건 온라인 공간을 빌리는 것. 호스팅 서비스를 고를 때 고려해야 할 사항이 몇가지 있다:
- 웹 용량
- DB 용량
- 트래픽
- PHP/MySQL/Apache 버젼
- 서브도메인도 제공하는가?
	- yamoo9.net
	- url.yamoo9.net (yourls)
>sansting.com에서 호스팅 서비스 비교 가능

컴퓨터 환경을 MAMP라는 프로그램으로 테스팅해볼 수 있음.
Filezilla로 FTP서버 접속할 수 있음

https://github.com/yamoo9/FDS/blob/master/DAY04/about-web-environment.md

#참여기업특강: [KORBIT 코빗](https://www.korbit.co.kr/)
- CEO: Tony Lyu

- 회사에 미국계 자본 많음. 요인들 중에 미국 유학한 사람이 많다. 코빗은 개발자 직군을 굳이 안 나눔. 1-2개월만 배워도 할 수 있는 간단한 일?! 

- Korbit handles BitCoin, Ethereum, and KRW. 7월에 채굴량 적어진다고 해서 빗코인 가격 오르고 있음. (Insider information - money opportunity)

- 하이픈이라는 네트워크 이용해서 거래한다. 일반 은행을 서용하면 수수료가 대구은행-한국-외환-환전-뉴욕(제이피모건 or 씨티)-파리 등 어마어마함

- 블록체인 기술로 전세계에 동일하게 있는 잔고 디비 연동: `Tamper evident` data structure using `checksum`. This ensures consensus on currency(BitCoin), smth, and contracts(Ethereum)

- 아마존 람다 - 無서버. Similar to Ethereum?

- 실리콘밸리에는 페이팔에 연결된 창업가 투자자가 많음. 유튜브 링크드인 일론머스크 등등. 하지만 금융계로 다시 한 사람은 딱 한명. 그만큼 리스크가 크다.

# Day 6 TIL
####Form sturcture
```
form>(fieldset>legend+(div>label+input)*3)*2+input:submit
```

#####`<form>` attributes
- name
- action: php 등 스크립트가 들어감?
- method: GET/POST등의 request protocol
- enctype: `application-x-www-form-urlencoded` for ASCII, `multipart/form-data` for Binary?


===
#####Label
- 암묵적 방식: `label>input`; doesn't require `for=""` in label nor `name=""` and `id=""` in input; some screenreaders cannot recognize this method properly.
- 명시적 방식: `label+input`; requires `for=""` in label and `name=""` and/or `id=""` in input;

===
#####Different types of button and input
- `<button type=""></button>` used to be more useful when you wanted to make a "pretty" button with an image in it.
	- submit - form 안에서만
	- reset - form 안에서만; 초기화 시킴. `value`나 `checked`로 표시해준 것들은 초기 상태임.
	- button
- `<input type="">`
	- text
	- password: the content is hidden
	- email: checks if content is proper email format
	- button
	- image
	- color
	- radio: choose one of several
	- file: upload file, you can do multiple
	- hidden: not for users. ex) is this suitable for ajax?	
- Web 2.0
	- email
	- url
	- number
	- search
	- range
	- data pickers
	- color
	- datalist
	- keygen
	- output
	
	- checkbox: multiple checkboxes. Requires different `<value>` attribute for each choices. You can mark this as a list if you want to show it vertically listed. `ul>li*>label[for="$#"]>input[id="check-$#"]+{$#}` gives:
		<pre>&lt;ul&gt;
			&lt;li&gt;&lt;label for="read"&gt;&lt;input type="text" id="check-read"&gt;read&lt;/label&gt;&lt;/li&gt;
			&lt;li&gt;&lt;label for="surf"&gt;&lt;input type="text" id="check-surf"&gt;surf&lt;/label&gt;&lt;/li&gt;
			&lt;li&gt;&lt;label for="play"&gt;&lt;input type="text" id="check-play"&gt;play&lt;/label&gt;&lt;/li&gt;
			&lt;li&gt;&lt;label for="watch"&gt;&lt;input type="text" id="check-watch"&gt;watch&lt;/label&gt;&lt;/li&gt;
		&lt;/ul&gt;</pre>
- `contenteditable="true"` makes content editable by clicking it. attribute for any elements?
- textarea: large text area
- select/combobox/dropdown/optionmenu. structure: `div>(label>h3)+select[name=""]>(optgroup[label="$$"]>option[value="$$"]*3)*4`


===
#####`<button>` attributes
types <input type="button" value="okay"> 타입만 지정해주면 브라우저마다 조금씩 다르게 보임. Value도 같이 지정해주어야 통일되게 보임. 

===
#####`<input>` attributes
- `name="identifier"` for label to find
- `id="useful for radio"` because several choices can have the same name and a common label, like gender, but they have separate labels, like male and female.
- `value="text"` in text input leaves default text. If assigned and selected(for dropdown/radio/checkbox), this information is what is sent through the url in GET method.
- `disabled` makes the input disabled
- `required`
- `placeholder="text"` sets a guideline for what to input
- `maxlength="integer"` sets the maximum number of characters in password, text
- `checked` checked라고 명시되어있으면 초기 상태가 선택상태. xhtml에서는 checked="checked"라고 써야 함
- `multiple` in file input means you can select several files at once.
- `cols`, `rows` in textarea sets the size of the textarea and they are proper html attributes.

===

####Script
script랑 style은 head나 body 에서 사용하는 것마다 사용법이 다른 듯?

`<noscript></noscript>` 를 사용하면 자바스크립트가 지원되지 않는 환경에서 실행되는 코드를 넣을 수 있지만, 최근에는  Modernizr 라이브러리를 사용하여 html class를 'js' 'no-js' 이런 식으로 지정해주면 noscript 없이도 브라우저 환경을 식별할 수 있다.

#To Do
- 웹호스팅 & FTP 설치
- 퀴즈 문항 5개 만들기
- 집 가는 길에 [Frontend Developer Handbook](http://www.frontendhandbook.com/) 읽어보기
- [React.js](http://blog.coderifleman.com/post/122232296024/reactjs%EB%A5%BC-%EC%9D%B4%ED%95%B4%ED%95%98%EB%8B%A41)가 뭔지 읽어보기
- [WAI-ARIA(Web Accessibility Initiative - Accessible Rich Internet Applications)](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Web_applications_and_ARIA_FAQ)

#Questions
- script랑 style은 head나 body 에서 사용하는 것마다 사용법이 다른 듯?
	style은 헤드에서만 사용해야 하낟.
	스크립트는 이미 로드된 부분에 대해서만 applicable하다.
	그렇기 때문에 스타일이 로드된 후에 부르는 게 좋다.
	
- difference between name and id
	<blockquote>
		<p>
		Use <code>name</code> attributes for form controls (such as <code>&lt;input&gt;</code> and <code>&lt;select&gt;</code>), as that's the identifier used in the <code>POST</code> or <code>GET</code> call that happens on form submission.
		<br>
		Use <code>id</code> attributes whenever you need to address a particular HTML element with CSS, JavaScript or a fragment identifier. It's possible to look up elements by name, too, but it's simpler and more reliable to look them up by ID.</p>
		<cite>Warren Young</cite>
	</blockquote>
- what's needed/recommended in tables: caption, title, etc.
- Grid & framework design = adaptive?
- 스큐어모피즘이 뭐니?
- difference between code and pre
- Why use multipart/form-data for binary data?
- What is binary data?
- HTML element: [pre 엘리먼트](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/pre)는 스타일 적용이 안 되는가?
- git: Difference between merge and checkout?
- CSS: We use `table, tr, th, td` to mean that we want some styling to apply for all four elements. What about styles that we want to apply to those that are all four, not just any of the four?
- 하위호환성이 있다는 건  UTF-8 디코더로 ASCII를 읽을 수 있다는건가? 아니면 반대인가? 아니면 쌍방인가?

	> ASCII 인코딩은 UTF-8의 부분 집합이다. 일반적인 ASCII 문자열은 올바른 UTF-8 문자열이며, 따라서 하위 호환성이 보장된다.
- contenteditable는 form으로 전송되나? 안되더라도 다른 방법으로 서버로 전송할 수는 있겠지?
- script랑 style은 head나 body 에서 모두 사용 가능하고, 위치에 따라 할 수 있는게 다른 듯?
- 웹용량과 DB용량의 차이?
	
	>웹용량: 개인적으로 사용하시는 PC의 하드와 비슷하게 생각하시면 됩니다. 서버를 구동하기 위해 필요한 자료를 FTP로 업로드 하거나 자동설치를 이용하여 설치하게 되는데 이때 설치되는 공간 입니다. 여기에 한가지 추가되는 항목이 게시판에 첨부된 파일(파일,이미지등)도 웹용량이 소진 됩니다.
	>
	>DB용량: 홈페이지를 만들면 보통 게시판이 만들어지는데 게시판에서 작성된 글들의 데이터가 DB용량에서 소진이 됩니다. (위에서 설명 드린데로 게시판에 첨부된 자료는 DB용량이 아닌 웹용량으로 분류됩니다.)
	>
	> *http://wookho.tistory.com/*