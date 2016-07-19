######Front End Web Development School

#TIL

###Adaptive Web

###점진적 기능향상 vs 우아한 기능저하
전자: 기술적 제약에 상관없이 컨텐츠에 접근가능하도록 만드렁야 한다.

###desktop first vs mobile first
컨텐츠를 

###Responsive Web
2010: Ethan Marcotte mixed flexible image + fluid grid + media query to create this new concept.
우리가 할 건 breakpoint와 미디어쿼리?를 사용할 것
Google: [The New Multi-Screen World report](https://ssl.gstatic.com/think/docs/the-new-multi-screen-world-study_research-studies.pdf)
1. 컨텐츠 중심
1. 가급적 네이티브 기능 사용 (커스텀은 시간도 들고, 접근성 부족하기도 하다)
1. Form 2.0
1. Natural User Interface (NUI)를 고려한 설계
1. 모호하지 않은 내비게이션
1. 화면에 바로 보이지 않는 컨텐츠는 Lazy Loading
1. 읽기 쉬운 컨텐츠를 구성하는 타이포그래피
1. SVG 그래픽 및 아이콘 폰트
1. 데이터 커넥션 불안정 고려 (다음의 메인페이지는 무조건 스타일시트를 HTML에 포함)
1. 성능고려 (요청 회수 줄임)
1. 모바일 first
1. 웹 리소스 압축 배포 (gZIP - 훨씬 압축률 좋고 성능 좋다)
1. 프레임워크 도입 *검토* (획일화될 수도 있음. 직접 만드는게 나을 수도)
1. 디자인 패턴 라이브러리 (UI KIT)
1. IE는 우아한 기능저하로 대처
1. 고해상도 디스플레이 대응
1. 마으스 이벤트 핸들링에서 벗어나야 함 (모바일에서는 터치, 탭, 꾸욱 등이 있을라나)
1. 애자일 방식 취득

###유동이미지 vs 클리핑
유동: 전체 이미지를 똑같은 비율로 줄여준다.
클리핑: 화면이 줄어들면 이미지를 크로핑해서 중요한 부분이 잘 보이게 한다.

GIST를 사용하면 자기가 올려놓은 코드 조각들을 불러올 수 있다. 예제를 넣어두기 좋다.
gist.github.io 라서 버젼관리가 됨. 세팅 페이지에서 토큰 불러와야함.

###Even more
Feature Detection
Serverside component cooperation
performance
conditional loading - lazy loading
content strategy - how would you structure the content
touch
platform optimiazation

###[Video](embedresponsively.com)
poster's width and height doesn't change?
