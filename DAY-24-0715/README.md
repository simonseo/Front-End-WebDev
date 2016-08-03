


###Holzweiler depth 2 drop down menu


### 이미지 자르기 & 배율
`v > ctrl+click` : auto select
context menu
`use action!`
console> winodw.devicePixelRatio 는 레티나에선 2, 레티나 HD는 3이 나온다.
- 아이폰 3GS 시대: 320x480, CSS Pixel-Ratio = 1
- 아이폰 4: 320x480 (640x960), CSS Pixel Ratio = 2
이 2배의 영향을 받는 건 이미지밖에 없다. 나머지는 그대로임.. 그렇기 때문에 시안을 전부 2배로 하는 게 아니다!! 웹은 그냥 1배로 하고 이미지만 2배로 키워도 괜찮은 이미지를 사용하면 되는거임. 그런데 그러면 export는 어떻게 하나? 1배 시안으로 작업하되, 고해상도 이미지를 Smart Object로 바꿔주고 transform 시켜주면 원본 픽셀이 유지된다. 

앱은 조금 다르다. 앱은 시안을 실제로  2배, 3배씩 해줘야 됨.
[브런치에 픽셀 밀도 검색!](https://medium.com/@pnowelldesign/pixel-density-demystified-a4db63ba2922#.c44gjixgh)

CC는 축복받았다. 레이어에 `icon/layer_name.png32, 200% icon/layer_name.png` 등으로 이름을 짓고, `File > Generate > Image Assets` 로 매우 효율적으로 내보낼 수 있다. 
####내보내기
- .png - 기본, 24비트
- .png8 - 8비트
- .png32 - 24비트
- .jpg6 - 60% 압축률
- 200% - 200% 확대
- 300% - 300% 확대
- folder_name/ - 폴더 구조

####차이점
- jpg/jpeg 투명하지 않은 사진 무저건. (jpg2000이라고 투명한 게 있었음). 확장자를 3글자까지만 지원하는 OS가 있었는데 그 관례를 따랐음.
- png 용량이 크다. 투명색있는 사진. 24비트는 jpg의 표현력이 있음.
- gif = png8 색 표현력 최대 256. animation 기능. 원작자가 돈을 받으려고 하니까 W3C에서 PNG를 만듬
- svg ie 하위 버젼 호환 문제가 있음. vml 사용했었음. 복잡하지 않은 그래픽. 예를 들어 플랫 디자인의 UI. SVG로 내보낸다고 해서 벡터이미지가 되는게 아님. 
- 벡터 shape여러개로 되어있는 모양 -> 벡터 아이콘 화살표(path selector?) > merge components 
- effect 써서 export하면 예전 포토샵에서는 svg로 내보내도 비트맵으로 저장되었었음. 

sprite 가 만들어져ㅣㅇㅆ을 때 좌표 뽑아내기 쉬운 www.spritecow.com 웹사이트를 이용하면 좋다.
spreitepad.wearekiss.com

### Responsive Grid

