######Front End Web Development School

#TIL

###Data Types
- `Number` 5em, 15px (these are strings in JS)
	$number/($number*0+1) returns unitless number.
- `String` Times, "Times New Roman" (strings need quotation marks in JS)
- `Color` (doesn't exist in JS). 
	You can use rgba($color_in_HEX, $alpha)
	GET functions($color):
		red(), green(), blue()
		hue(), saturation(), lightness()
	SET:
		hsla()
	Adjust Color:
		$color, $degrees: adjust-hue()
		$color, $amount: lighten(), darken(), saturate(), desaturate()
- `Boolean` (yes, no exist in CoffeeScript, not sass)
- `List` 10px auto 20px, "Spoqa Han Sans", "Nanum Gothic", Dotum, Sans-Serif (both comma-separated and space-separated are the same lists in SassScript, but not the same in CSS.)

###Difference betwwen complement and invert

>Complement:
>From ISO/IEC 29500-1 section 20.1.2.3.7 it states "Two colors are called complementary if, when mixed they produce a shade of grey." However, the example given after this sentence doesn't really explain how that process works. Here is how a Complimentary color is calculated:
> 
>Add the min and max values together for the 3 individual color channels.
>Subtract the original value from the total obtained in step 1 to obtain the each new channel value.
> 
>Example:
>Original Color: RGB(234, 127, 62)
>Total of min and max values: 296
>Subtract original channel values from the total to get the complementary color: RGB(62, 169, 234)
> 
> 
>Inverse:
>From ISO/IEC 29500-1 section 20.1.2.3.17 it states "This element specifies the inverse of its input color." However, the example given makes it look like it functions exactly the same way as Complement, which in the case of the color chosen would give you the same result. The inverse of a given color is the result of subtracting the originial RGB values from 255, or flipping the bits.

###Inverse 와 Complement의 차이
####Inverse
1. 정의 <br>
	ISO/IEC 29500-1 section 20.1.2.3.17 국제표준에 의하면, "원래 색의 반대색이다."라고 정의해주고 있는데 표준 가이드라인에서 제시한 예시를 보면 보색과 다름이 없어보였습니다. <br>
	컴퓨터적인 정의는 **원래 색상의 RGB 값을 각각 255에서 빼준 값입니다.** (다르게 보면 비트의 0, 1 값을 각각 반전시킨 값입니다.)
1. 예시 <br>
	원래 색상: RGB(**234**, **127**, **62**) <br>
	255에서 각각을 빼면 RGB(255-**234**, 255-**127**, 255-**62**). <br>
	이걸 계산해주면 RGB(21, 128, 193)이 나옵니다.

####Complement
1. 정의 <br>
	ISO/IEC 29500-1 section 20.1.2.3.7 국제표준에 의하면, "두 색을 섞었을 때 무채색을 나타내면 서로 보색이다."라고 정의하고 있습니다. 그런데 어떻게 섞는지 등을 설명해주지 않았습니다. <br>
	컴퓨터적인 정의는 다음과 같습니다. **원래 RGB 값 중에 최대값과 최소값을 더해준 값을 x라고 하면, x로부터 원래 RGB 값을 각각 빼면 보색이 나온다.**
1. 예시 <br>
	원래 색상: RGB(**234**, **127**, **62**) <br>
	최대값 234와 최소값 62를 더하면 296. <br>
	RGB(296-**234**, 296-**127**, 296-**62**)를 계산해주면 보색은 RGB(62, 169, 234)가 된다. <br>
	최대값과 최소값이 항상 뒤바뀐다.






