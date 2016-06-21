웹디자인의 역사

1. 웹의 시작 (1989)
CLI (Command Line Interface)
No visual design at all. Maybe using spaces and special characters.

2. Table - beginning of visual web design 그리드 디자인 (1995)
데이빗 시겔: 테이블을 이용하면 잡지 형태의 디자인이 가능하다!
CSS가 있었지만 브라우저에서 호환 해주지 않음. 플래시가 강력해서 잘 안 쓰임.

3. 자바스크립트의 등장 (1995)
웹이 동적이게 변함.
CSS가 자바스크립트의 애니메이션 부분은 대체하고 있음.

4. 플래시 - 자유로운 표현력 (1996)
예술적인 측면이 많았다. 화려했지만 느려졌고, 접근성은 낮고, 검색엔진에 좋지 않고, CPU 점유율이 너무 높았다.
비주얼 디자이너를 열광시켰지만, 웹 UI 디자인에 있어서는 암흑기였다.

5. CSS (1998)

6. 그리드 & 프레임워크 디자인 (2007)
프레임워크 (조립식)
그리드 (960 그리드시스템을 와이드스크린에서는 12단을 모두 보여주고, 모바일에서는 3개를 - 반응형?)

7. 반응형 웹 디자인 (2010)
AJAX처럼 새로 나온 기술은 아니었음.

8. 플랫 디자인 (2010)
계속 리얼리즘으로 가던 도중 기기 화면이  다양해지면서 스큐어모피즘이 ㅂ버려짐.

웹 환경

웹은 요청과 응답의 연속이다
클라이언트 - OS - 브라우저 - 서버
클라이언트는 사용자 혹은 사용자의 단말기
크로스브라우저, 크로스플랫폼 시대에는 정확히 똑같이 보여주기 어렵기 때문에 내용과 내용의 구조화가 더 중요해진다.

서버: URL (IP:Port) Port is 80 by default so it doesn't need to be specified. 
types of ports (Webserver(80), FTP(21), database(mysql:3306), DNS(1023,53), ssh(22), email(110,25,143))

요청: GET - 정보를 서버로부터 가져옴 .php?id=314134&user_id=3491&page=3 : 특정 id 등을 
POST - 정보를 수정/입력하는 요청
싱글페이지 애플리케이션 기술로는 서버로의 요청이 별도로 필요없어진다.

호스팅:sansting.com에서 호스팅 서비스 비교 가능

웹호스팅
네트워크에 연결되어있는 컴퓨터를 호스트라고 부른다. 온라인 공간을 빌리는 것. 
웹 용량
DB 용량
트래픽
PHP/MySQL/Apache 버젼
서브도메인도 제공하는가?
	yamoo9.net
	url.yamoo9.net (yourls)

컴퓨터 환경을 MAMP라는 프로그램으로 테스팅해볼 수 있음.
Filezilla로 FTP서버 접속할 수 있음

https://github.com/yamoo9/FDS/blob/master/DAY04/about-web-environment.md