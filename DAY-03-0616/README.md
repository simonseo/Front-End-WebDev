###### Front-End Development School

# Day 3 TIL
##### 참여 기업 특강: DONUS
GOTO 참여기업특강 폴더

##### Git 특강
[야곰](yagomsoft@gmail.com)

######소스저장소란, 

######버젼관리시스템(VCS, Version Control System)의 이점
1. 변경된 내용을 공유 가능 - 어떤 생각으로, 어떤 과정 등
1. 타인이 작업한 내용 쉽게 병합 - 협업 가능
1. 과거 상태로 복구 가능
1. 여러 분기(Branch)를 통해 병렬 관리 가능

######Examples of VCS
1. Subversion (SVN) - Git과 함께 가장 대표적으로 사용되고 Git 이전에는 대부분 SVN을 사용함. Git과 다르게 원격저장소만 있음.
1. Mercurial - Git과 비슷한 철학; 가볍고 쉬운 사용을 위해 탄생함.
1. Git by Linus Torvalds (also made Linux)
	1. 복잡한 *Branch* 관리 적합
	1. 로컬과 원격 저장소의 분리
	1. 다양한 서비스 업체 like GitHub
	1. 다양한 보조 툴

#####Git
######Git에서의 작업 흐름
1. Working Directory - where we actually work on the file (local computer?)
1. Stage Area - Stage fixes. we prepare today's work for Git. We check which files to commit and leave comments.
1. .git directory (Repository) - Commit. like a Photoshop snapshot. 
1. Remote Repository

######Repository 
Git leaves same files in Local as well as Remote Repository. Local works even where user has limited internet access. So if there's no need to share a project, there's no need to sync with Remote Repository. Remote Repository is the repository in the traditional sense. It is where change is logged. Meeting place of all local repositories. 

######Why Stage Area?
So that you can choose which files to commit. For example, when the client doesn't want the new function but wants the security patch. Or when there are files that are not related to the product, such as IDE-dependent files or OS-dependent files. You can manage these with .gitignore file. 

#####SourceTree
Another Git program. You can Push (copy from your local repo to remote repo) or Pull (copy from remote repo to local repo). If there are unwanted files, you can use .gitignore: open it in a text editor and write the filenames. 
![GitFlow - Branching and Merging](http://jeffkreeftmeijer.com/images/gitflow.gif)
You can branch or merge to cooperate effectively.

# My Website Elements
1. Home
	1. Name, picture, profile summary (age, education, based where)
	1. links: FB Flickr Github
	1. Email
	1. Phone
1. About
	1. My story
1. Photography
	1. photos - if clicked, show bigger picture
	1. Short caption
	1. flickr link
1. Developer
	1. Projects
		1. Photo
		1. Explanation
	1. Github link
1. Contact

# TO DO
1. Read about http-equiv (https://www.w3.org/TR/html5/document-metadata.html#attr-meta-http-equiv)
1. Read about UTF-8 [Wiki](https://ko.wikipedia.org/wiki/UTF-8)
1. difference between URI and URL?
1. Read about [MIME Type](https://en.wikipedia.org/wiki/Media_type)
1. What is Browser Hack in CSS? &#10003;
1. Read about color profiles
1. Make my website &#10003;
1. Difference between merge and checkout?