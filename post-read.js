function read_economy() {

    const array = ['li-read1','li-read2','li-read3','li-read4','li-read5','li-read6','li-read7','li-read8' ];
    for(i=0;i<=7;i++){
        change = document.getElementById(array[i]);
        change.style = 'background-color:white; color:black';
    }

    const color = document.getElementById('li-read2');
    color.style = 'background-color:#35ae5e; color:white';

   

    const element = document.getElementById('post-wrap');
    element.innerHTML  = 
    '<div class="naver-post">'+
    '<div class="post" style="margin-top:15px;">'+
    '<img src="img/post10.jpg" width="170px;" height="114px;" align="left" style="margin-right:15px;">'+
    '<span style="color:#35ae5e;"><strong>경제M</strong></span><br>'+
    '<span><strong>부모찬스로 내 집 마련하는 10,20대...커지는 부동산 블루</strong></span><br>'+
    '<span style="color:#404040">부모찬스로 서울 아파트 매입하는 10,20대 늘어전문가 부동산 시장 안정화 위해 양도세 <br>'+
    '낮춰야 서울의 한 부동산 중개업소 모습. 사진은 기사 중 특정 표현과 무관. 월급쟁이로...</span><br>'+
    '<span style="color:#505050">아시아경제</span> <span style="color:grey;">4일 전</span>'+
    '</div>'+

    '<div class="post" style="margin-top:15px;">'+
    '<img src="img/post3.jpg" width="170px;" height="114px;" align="left" style="margin-right:15px;">'+
    '<span style="color:#35ae5e;"><strong>경제M</strong></span><br>'+
     '<span><strong>주택청약에 월 20만원씩 넣던 20대 직장인 홍진씨의 한숨</strong></span><br>'+
    '<span style="color:#404040">월20만원씩 주택청약을 넣으면 10년 후 2400만원이다. 물가상승률 3%를 가정해 10년 후 <br>'+
    '2400만원의 화폐가치를 계산하면 3225만원이다. 차이가 상당하다. 1순위 조건을 달성했...</span><br>'+
   '<span style="color:#505050">더스쿠프</span> <span style="color:grey;">어제</span>'+
    '</div>'+

    '<div class="post" style="margin-top:15px;">'+
    '<img src="img/post4.jpg" width="170px;" height="114px;" align="left" style="margin-right:15px;">'+
    '<span style="color:#35ae5e;"><strong>경제M</strong></span><br>'+
    '<span><strong>70억 자산가 "지금 1억 있다면 이렇게 하세요"</strong></span><br>'+
    '<span style="color:#404040">그런데 제가 요즘 보기에는 이게 불가능하고, 이걸 요즘 하고 싶으시다면 동시에 해야해요.  <br>'+
    ' 일하고 모으고 투자하는 것을 동시에 하는 거예요. 예를 들면 기업은행 고객으로서 적금...</span><br>'+
    '<span style="color:#505050">신사임당</span> <span style="color:grey;">4일 전</span>'+
    '</div>'+

    
    '<div class="post" style="margin-top:15px;">'+
    '<img src="img/post5.jpg" width="170px;" height="114px;" align="left" style="margin-right:15px;">'+
    '<span style="color:#35ae5e;"><strong>경제M</strong></span><br>'+
   '<span><strong>존리의 10계명 "내 집 마련 포기하기 전에 이것부터 아껴라"</strong></span><br>'+
    '<span style="color:#404040">존리의 투자 10계명아파트값이 고공행진을 하면서 자산 쌓기를 포기하고 현재를 즐기기로  <br>'+
    '결심한 2030 욜로족이 많아졌다. ‘동학개미의 구루’ 존리가 최근 “당장 가진 게 적다는 부...</span><br>'+
   '<span style="color:#505050">콘텐츠 컴퍼니</span> <span style="color:grey;">3일 전</span>'+
    '</div>'+

    '</div>'+

    '<hr>'+

    '<div class="naver-tv" style="">'+
    '<div class="col-sm-4" style="padding-left:0px; padding:right:0px;">'+
      '<img src="img/tv1.jpg" width="232px" height="130px" style="margin-bottom:10px;">'+
      '<p><strong>주식투자 꿀팁! 최적의 매도 타이밍은 오후 2시 이후?</strong></p>'+
     '<span style="font-size:13px;">주간동아TV</span> <span style="color:grey; font-size:13px;">2주일 전</span>'+
   '</div>'+

    '<div class="col-sm-4" style="">'+
      '<img src="img/tv2.jpg" width="232px" height="130px" style="margin-bottom:10px;">'+
      '<p><strong>짠순이가 부동산/주식으로 20억 만든 과정</strong></p>'+
      '<span style="font-size:13px;">제태크하는 아내,구채희</span> <span style="color:grey; font-size:13px;">1개월 전</span>'+
    '</div>'+

    '<div class="col-sm-4" style="padding:right:0px;">'+
      '<img src="img/tv3.jpg" width="232px" height="130px" style="margin-bottom:10px;">'+
      '<p><strong>2030세대들이 걱정되는 이유</strong></p><br>'+
      '<span style="font-size:13px;">북극성주TV</span> <span style="color:grey; font-size:13px;">3주일 전</span>'+
    '</div>'+
  '</div>'+
  '<hr>'+

  '<div class="naver-post">'+

    '<div class="post">'+
      '<img src="img/post6.jpg" width="170px;" height="114px;" align="left" style="margin-right:15px;">'+
      '<span style="color:#35ae5e;"><strong>경제M</strong></span><br>'+
      '<span><strong>"여기에 집을 또 짓겠다고요?" 2기신도시 주민들 분노</strong></span><br>'+
     '<span style="color:#404040">지금 주민들이 이용할 만한 편의 시설도 없는데 그 자리에 집을 또 짓겠다니요. 여당인 더<br>'+
      '불어민주당 부동산특별위원회가 2기 신도시 4곳의 ‘유보지’ 일부에 주택을 공급하기로...</span><br>'+
      '<span style="color:#505050">땅집고</span> <span style="color:grey;">1주일 전</span>'+
    '</div>'+

    '<div class="post" style="margin-top:15px;">'+
      '<img src="img/post7.jpg" width="170px;" height="114px;" align="left" style="margin-right:15px;">'+
      '<span style="color:#35ae5e;"><strong>경제M</strong></span><br>'+
      '<span ><strong>상위 0.1% 부자들이 절대 쓰지 않는 돈 3가지</strong></span><br>'+
      '<span style="color:#404040">많은 돈을 가진 부자는 그만큼 돈도 많이, 헤프게 쓸 것이라는 선입견이 있습니다. 물론 부<br>'+
      '자들의 씀씀이가 일반 가계에 비해 큰 것은 사실입니다. 자신이 가치 있게 여기는 분야나...</span><br>'+
      '<span style="color:#505050">상상인저축은행</span> <span style="color:grey;">2주일 전</span>'+
    '</div>'+

    '<div class="post" style="margin-top:15px;">'+
      '<img src="img/post8.jpg" width="170px;" height="114px;" align="left" style="margin-right:15px;">'+
      '<span style="color:#35ae5e;"><strong>경제M</strong></span><br>'+
      '<span><strong>카뱅에 170억 넣더니... 하루새 8000만원 벌었다</strong></span><br>'+
      '<span style="color:#404040">카카오뱅크가 상장 첫날 시초가 대비 29.98% 오른 6만9800원에 거래를 마치며 상한가를  <br>'+
      '기록했다. 시가총액 11위(약 33조원)에 올라서며 KB금융(약 22조원) 등 기존 금융 대표주...</span><br>'+
      '<span style="color:#505050">한국경제</span> <span style="color:grey;">2주일 전</span>'+
    '</div>'+

    '<div class="post" style="margin-top:15px;">'+
      '<img src="img/post9.jpg" width="170px;" height="114px;" align="left" style="margin-right:15px;">'+
     '<span style="color:#35ae5e;"><strong>경제M</strong></span><br>'+
      '<span><strong>30평대라니? 믿기지 않네요, 주방까지 시원하게 탁 트인 아파트 거실</strong></span><br>'+
      '<span style="color:#404040">오늘의집 @shkang0810 님의집들이입니다 건물형태: 아파트가족형태: 신혼부부평 수: 39평 <br>'+
      '이 집의 자세한 정보 더 보러가기 (▲이미지 클릭) 안녕하세요. 저는 13년 4개월간...</span><br>'+
      '<span style="color:#505050">오늘의 집</span> <span style="color:grey;">1주일 전</span>'+
    '</div>'+

  '</div>';

}

function read_living() {
    const array = ['li-read1','li-read2','li-read3','li-read4','li-read5','li-read6','li-read7','li-read8' ];
    for(i=0;i<=7;i++){
        change = document.getElementById(array[i]);
        change.style = 'background-color:white; color:black';
    }

    const color = document.getElementById('li-read5');
    color.style = 'background-color:#ee909e; color:white';

   

    const element = document.getElementById('post-wrap');
    element.innerHTML  = 
    '<div class="naver-post">'+
    '<div class="post" style="margin-top:15px;">'+
    '<img src="img/l_post1.jpg" width="170px;" height="114px;" align="left" style="margin-right:15px;">'+
    '<span style="color:#ee909e;"><strong>리빙</strong></span><br>'+
    '<span><strong>주방을 예쁘게 꾸며줄 소품들</strong></span><br>'+
    '<span style="color:#404040">부집을 예쁘게 꾸밀 때마다 힐링이 되는 기분은 저만 느끼는 걸까요!! 아니겠죠!! 요즘은 남 <br>'+
    '녀노소 가리지 않고 예쁜 집에서 사는 걸 좋아하고 또 예쁘게 꾸미려는 노력하시는 분들...</span><br>'+
    '<span style="color:#505050">홍자</span> <span style="color:grey;">5일 전</span>'+
    '</div>'+

    '<div class="post" style="margin-top:15px;">'+
    '<img src="img/l_post2.jpg" width="170px;" height="114px;" align="left" style="margin-right:15px;">'+
    '<span style="color:#ee909e;"><strong>리빙</strong></span><br>'+
     '<span><strong>제로웨이스트 18년째, 환경을 위한 가방 속 외출 필수품</strong></span><br>'+
    '<span style="color:#404040">안녕하세요! 독일에서 살림하는 단순이 입니다. 이번 포스팅은... 정말 정말 오래된 옛날 이 <br>'+
    '야기를 꺼내보려 해요. 올해 새해 다짐 포스팅에서 적었듯이 2021년도 지금 제 나이는 3...</span><br>'+
   '<span style="color:#505050">단순이 DansoonLee</span> <span style="color:grey;">7개월 전</span>'+
    '</div>'+

    '<div class="post" style="margin-top:15px;">'+
    '<img src="img/l_post3.jpg" width="170px;" height="114px;" align="left" style="margin-right:15px;">'+
    '<span style="color:#ee909e;"><strong>리빙</strong></span><br>'+
    '<span><strong>셀프 시공 도전, 실리콘 깔끔하게 쏘는 팁</strong></span><br>'+
    '<span style="color:#404040">전문가처럼 실리콘쏘는법 실리콘작업 시 실리콘건(총)사용법 파우더룸 아치 거울 작업하<br>'+
    ' 면서 실리콘작업을 못했었거든요~ 귀찮아서 미루고 미루다.. 더 이상은 안될 것 같아서...</span><br>'+
    '<span style="color:#505050">하마미</span> <span style="color:grey;">1개월 전</span>'+
    '</div>'+

    
    '<div class="post" style="margin-top:15px;">'+
    '<img src="img/l_post4.jpg" width="170px;" height="114px;" align="left" style="margin-right:15px;">'+
    '<span style="color:#ee909e;"><strong>리빙</strong></span><br>'+
   '<span><strong>처음하는 인테리어, 신혼집</strong></span><br>'+
    '<span style="color:#404040">포스팅하려 사진을 정리하다보니 새록새록 다시금 기억나는 나의 첫 신혼집 인테리어 원 <br>'+
    '래는 철거 전 사진부터 정리해서 올리려했으나 나의 현재 여건과 능력(?)을 생각해서 우...</span><br>'+
   '<span style="color:#505050">sys</span> <span style="color:grey;">2주일 전</span>'+
    '</div>'+

    '</div>'+

    '<hr>'+


  '<div class="naver-post">'+

    '<div class="post">'+
      '<img src="img/l_post5.jpg" width="170px;" height="114px;" align="left" style="margin-right:15px;">'+
      '<span style="color:#ee909e;"><strong>리빙</strong></span><br>'+
      '<span><strong>선반과 수납 바구니로 만든 우리집 식량 창고, 팬트리</strong></span><br>'+
     '<span style="color:#404040">매일 아침 뜨거운 햇살에 눈을 뜨며 일어나면 어김없이 하루가 시작된다. 아침부터 사부작<br>'+
      '사부작 거리다보면 어느새 온 몸엔 땀이 흥건하다. 살림은 매일 하는 일임에도 불구하고...</span><br>'+
      '<span style="color:#505050">닭똥집</span> <span style="color:grey;">1주일 전</span>'+
    '</div>'+

    '<div class="post" style="margin-top:15px;">'+
      '<img src="img/l_post6.jpg" width="170px;" height="114px;" align="left" style="margin-right:15px;">'+
      '<span style="color:#ee909e;"><strong>리빙</strong></span><br>'+
      '<span ><strong>2평대 홈오피스</strong></span><br>'+
      '<span style="color:#404040">1.여름맞이 대격변. 방의 가구배치를 갈아엎었다. 쉬는 공간과 일하는 공간의 완벽하게 분<br>'+
      '리를 하는것이 목표였다. 컴퓨터의 뒤에 침대가 있다보니, 조금만 피로해도 바로 침대에...</span><br>'+
      '<span style="color:#505050">보통의미카</span> <span style="color:grey;">3일 전</span>'+
    '</div>'+

    '<div class="post" style="margin-top:15px;">'+
      '<img src="img/l_post7.jpg" width="170px;" height="114px;" align="left" style="margin-right:15px;">'+
      '<span style="color:#ee909e;"><strong>리빙</strong></span><br>'+
      '<span><strong>살면서 바꾸는 공간, 조금씩 달라진 신혼집 거실</strong></span><br>'+
      '<span style="color:#404040">사진 글/ 작은집 일상 (@draw.ilsang_) 인테리어에 관심 있으신 분들이라면 한 번쯤 들어<br>'+
      '봤을 유튜브 채널 인테리어쇼. 24만명의 구독자를 보유한 인테리어쇼에서는 인테리어...</span><br>'+
      '<span style="color:#505050">작은집 일상</span> <span style="color:grey;">2주일 전</span>'+
    '</div>'+

    '<div class="post" style="margin-top:15px;">'+
      '<img src="img/l_post8.jpg" width="170px;" height="114px;" align="left" style="margin-right:15px;">'+
     '<span style="color:#ee909e;"><strong>리빙</strong></span><br>'+
      '<span><strong>30평대라니? 믿기지 않네요, 주방까지 시원하게 탁 트인 아파트 거실</strong></span><br>'+
      '<span style="color:#404040">오늘의집 @shkang0810 님의집들이입니다 건물형태: 아파트가족형태: 신혼부부평 수: 39평 <br>'+
      '이 집의 자세한 정보 더 보러가기 (▲이미지 클릭) 안녕하세요. 저는 13년 4개월간...</span><br>'+
      '<span style="color:#505050">오늘의 집</span> <span style="color:grey;">1주일 전</span>'+
    '</div>'+

  '</div>';
}

function read_travel() {
    const array = ['li-read1','li-read2','li-read3','li-read4','li-read5','li-read6','li-read7','li-read8' ];
    for(i=0;i<=7;i++){
        change = document.getElementById(array[i]);
        change.style = 'background-color:white; color:black';
    }

    const color = document.getElementById('li-read3');
    color.style = 'background-color:#55ccc1; color:white;';


    const element = document.getElementById('post-wrap');
    element.innerHTML  = 
    '<div class="contain" style="margin-bottom:20px;">'+
    '<div class="col-sm-6">'+
      '<img src="img/read_1.jpeg" width="364px;" height="180px;" style="margin-bottom:10px;">'+
      '<p style="color:#55ccc1;"><strong>여행+ 핫플레이스</strong></p>'+
      '<p><strong>춘천에 이런곳이? 남녀노소 모두 반한 체험 스폿 N곳!</strong></p>'+
      '<p style="font-size:13px;"> 7월이 왔다. 이맘때쯤이면 어린이를 자녀로 둔 부모의 머릿속은 복잡해진다. 학교에서 내주는 여름방학 숙제에 늘 "체험...</p>'+
      '<p>여행+</p>'+
    '</div>'+

    '<div class="col-sm-6">'+
      '<div class="read-container" >'+
        '<img src="img/read2.jpeg" width="98px;" height="98px;" align="left" style="margin-right:15px;">'+
        '<span style="color:#55ccc1;"><strong>여행+ 읽을거리</strong></span><br>'+
        "<span><strong>초여름이면 너도나도 '이것' 먹겠다고<br>스페인 간다는데...</strong></span><br>"+
        '<span>여행 +</span>'+
    '</div>'+

    '<div class="read-container" style="margin-top:15px;">'+
      '<img src="img/read3.jpeg" width="98px;" height="98px;" align="left" style="margin-right:15px;">'+
      '<span style="color:#55ccc1;"><strong>여행+ 핫토픽</strong></span><br>'+
      '<span><strong>촬영차 들렸다가 인생샷 만들어준 이보영의 사진 속 장소</strong></span><br><br>'+
      '<span>여행 +</span>'+
    '</div>'+

    '<div class="read-container" style="margin-top:15px;">'+
      '<img src="img/read4.jpeg" width="98px;" height="98px;" align="left" style="margin-right:15px;">'+
      '<span style="color:#55ccc1;"><strong>여행+ LIFE</strong></span><br>'+
      '<span><strong>당진 가볼만한 곳, 당일치기 여행코스 BEST4</strong></span><br><br>'+
      '<span>여플프렌즈</span>'+
  '</div>'+
    '</div>'+

  '</div>'+
  '<hr>'+

  '<div class="naver-post">'+

    '<div class="post">'+
      '<img src="img/post1.jpg" width="170px;" height="114px;" align="left" style="margin-right:15px;">'+
      '<span style="color:#55ccc1;"><strong>매달상점</strong></span><br>'+
      '<span><strong>힐링 캠프에 이게 빠질 수 없지</strong></span><br>'+
      '<span style="color:#404040">제대로 쉬다 오자고요!</span><br>'+
      '<span style="color:#505050">포스트 보기 ></span>'+
    '</div>'+

    '<div class="post" style="margin-top:15px;">'+
      '<img src="img/post10.jpg" width="170px;" height="114px;" align="left" style="margin-right:15px;">'+
      '<span style="color:#55ccc1;"><strong>여행+</strong></span><br>'+
      "<span><strong>유명 해커가 밝인 공항에서 '폰 충전'하면 안 되는 이유</strong></span><br>"+
      '<span style="color:#404040">인천국제공항은 워낙 내부시설이 잘 되어 있고 안전하기로 유명합니다. 이 때문에 우리 나 <br>'+
      '라 관광객들은 공항 안에서 불법적인 일들이 일어날 거라곤 미처 예상하지 못하는 경우...</span><br>'+
      '<span style="color:#505050">스마트인컴</span> <span style="color:grey;">3일 전</span>'+
   ' </div>'+

    
    '<div class="post" style="margin-top:15px;">'+
      '<img src="img/post3.jpg" width="170px;" height="114px;" align="left" style="margin-right:15px;">'+
      '<span style="color:#55ccc1;"><strong>여행+</strong></span><br>'+
      '<span><strong>여름 바다보다 더 좋은 숲 뷰 리조트 TOP3</strong></span><br>'+
      '<span style="color:#404040">여름 바다보다 더 좋은 숲 뷰 리조트 TOP3 여름에 가야 제맛인 곳들이 있다. 바다가 가장 <br>'+
      '먼저 떠오르겠지만, 숲도 만만치 않다. 여름 숲은 우선 시원하다. 바다처럼 끈적이지 않는...</span><br>'+
      '<span style="color:#505050">네이버 여행플러스</span> <span style="color:grey;">어제</span>'+
    '</div>'+



    '<div class="post" style="margin-top:15px;">'+
      '<img src="img/post4.jpg" width="170px;" height="114px;" align="left" style="margin-right:15px;">'+
      '<span style="color:#55ccc1;"><strong>여행+ LIFE</strong></span><br>'+
      '<span><strong>보는 순간 힐링되는 요즘 인도네시아 하늘 색깔</strong></span><br>'+
      '<span style="color:#404040">[인사이트] 김나영 기자 = 올 여름 백신 접종 후 마스크를 벗고 바다로 풍덩 뛰어드는 상상<br>'+
      '을 해온 이들이 많을 것이다. 안타깝게도 고지를 눈앞에 두고 조금씩 기세가 꺾이고 있던...</span><br>'+
      '<span style="color:#505050">인사이트</span> <span style="color:grey;">1주일 전</span>'+
    '</div>'+

    '<div class="post" style="margin-top:15px;">'+
      '<img src="img/post5.jpg" width="170px;" height="114px;" align="left" style="margin-right:15px;">'+
      '<span style="color:#55ccc1;"><strong>여행+ LIFE</strong></span><br>'+
      "<span><strong>'라떼는 말이야' 유럽 처음 갔을 때 했던 치명적인 실수</strong></span><br>"+
      "<span style='color:#404040'>지난 주말 넷플리스로 영화 '미드나잇 인 파리'를 재탕했다. 최근 본 영화 중에 파리 여행 <br>"+
      '욕구를 가장 자극하는 영화였는데, 벌써 국내 개봉한지 10년이 됐다. 2012년 영화관에서...</span><br>'+
      '<span style="color:#505050">여행플러스</span> <span style="color:grey;">2일 전</span>'+
    '</div>'+

  '</div>'+

  '<hr>'+

  '<div class="naver-tv">'+
    '<div class="col-sm-4" style="padding-left:0px; padding:right:0px;">'+
      '<img src="img/tv1.jpg" width="232px" height="130px" style="margin-bottom:10px;">'+
      '<p><strong>"놀면서 돈벌기" 윤아도 반한 이곳에선 가능하다는데...</strong></p>'+
      '<span style="font-size:13px;">여행 플러스 TOUR PLUS</span> <span style="color:grey; font-size:13px;">3주일 전</span>'+
    '</div>'+

    '<div class="col-sm-4">'+
      '<img src="img/tv2.jpg" width="232px" height="130px" style="margin-bottom:10px;">'+
      '<p><strong>알카파와 산책할 수 있는 곳이 있다?!</strong></p>'+
      '<span style="font-size:13px;">여행 플러스 TOUR PLUS</span> <span style="color:grey; font-size:13px;">1개월 전</span>'+
    '</div>'+

    '<div class="col-sm-4" style="padding-right:0px;">'+
      '<img src="img/tv3.jpg" width="232px" height="130px" style="margin-bottom:10px;">'+
      '<p><strong>럭셔리 호텔 말고 80년된 한옥을 택한 이유</strong></p>'+
      '<span style="font-size:13px;">여행 플러스 TOUR PLUS</span> <span style="color:grey; font-size:13px;">1개월 전</span>'+
    '</div>'+
  '</div>'+
  '<hr>'+

  '<div class="naver-post">'+

    '<div class="post">'+
      '<img src="img/post6.jpg" width="170px;" height="114px;" align="left" style="margin-right:15px;">'+
      '<span style="color:#55ccc1;"><strong>여행+</strong></span><br>'+
      '<span><strong>마을 전체가 해바라기 천국! 물오른 그곳은?</strong></span><br>'+
      '<span style="color:#404040">양평 해바라기밭 출사 여행, 양동면 계정리 계수나무골 마을 정원 해바라기 7월 꽃구경<br>'+
        '양평 양동면 계정리 계수나모골 마을정원에 해바라기밭 정원에 노란 해바라기꽃이 지금 한...</span><br>'+
      '<span style="color:#505050">양평여행</span> <span style="color:grey;">6일 전</span>'+
    '</div>'+

    '<div class="post" style="margin-top:15px;">'+
      '<img src="img/post7.jpg" width="170px;" height="114px;" align="left" style="margin-right:15px;">'+
      '<span style="color:#55ccc1;"><strong>여행+</strong></span><br>'+
      '<span ><strong>산좋고 물좋은 여름휴가 추천 여행지, 충북 단양</strong></span><br>'+
      '<span style="color:#404040">무더운 여름철, 더위가 기승을 부릴수록 움직이기 싫지만, 그래도 할 거리는 많았으면 좋겠<br>'+
        '다. 여름 휴가를 어디로 갈까 고민을 하다 우린 또 단양을 선택했다. 시원한 바람이 부는...</span><br>'+
      '<span style="color:#505050">뉴스얌</span> <span style="color:grey;">2일 전</span>'+
    '</div>'+

    '<div class="post" style="margin-top:15px;">'+
      '<img src="img/post8.jpg" width="170px;" height="114px;" align="left" style="margin-right:15px;">'+
      '<span style="color:#55ccc1;"><strong>여행+</strong></span><br>'+
      "<span><strong>'여긴 몰랐다' 숨은 보석같은 보성 여름여행지5</strong></span><br>"+
      '<span style="color:#404040">코로나19 확산세가 좀처럼 꺾이지 않으면서 프라이빗 여행지를 선호하는 이들이 늘고 있 <br>'+
      '다. 그럼에도 여름 휴가 시즌이 한창인 요즘, 유명관광지 쏠림 현상도 여전하다. 이에 전...</span><br>'+
      '<span style="color:#505050">네이버 여행플러스</span> <span style="color:grey;">어제</span>'+
    '</div>'+

    '<div class="post" style="margin-top:15px;">'+
      '<img src="img/post9.jpg" width="170px;" height="114px;" align="left" style="margin-right:15px;">'+
      '<span style="color:#55ccc1;"><strong>여행+</strong></span><br>'+
      '<span><strong>보기만 해도 시원해~ 예쁨 폭발 고성 오션뷰 카페4</strong></span><br>'+
      '<span style="color:#404040">보는 것만으로도 시원한 고성 오션뷰 카페더 유니브 에디터 / 박현선 대한민국 동쪽에 위<br>'+
      '치한 지역으로 동해안의 맑은 바다를 볼 수 있는 고성을 찾는 젊은이들이 많은데요! 분위...</span><br>'+
      '<span style="color:#505050">더유니브</span> <span style="color:grey;">어제</span>'+
    '</div>'+

  '</div>'+

  '<hr>'+

  '<div class="naver-tv">'+
    '<div class="col-sm-4" style="padding-left:0px; padding-right:0px;">'+
      '<img src="img/tv4.jpg" width="232px" height="130px" style="margin-bottom:10px;">'+
      '<p><strong>그래피티에 페루음식까지! 여기 한국 맞아?</strong></p>'+
      '<span style="font-size:13px;">여행 플러스 TOUR PLUS</span> <span style="color:grey; font-size:13px;">3주일 전</span>'+
    '</div>'+

    '<div class="col-sm-4">'+
      '<img src="img/tv5.jpg" width="232px" height="130px" style="margin-bottom:10px;">'+
      '<p><strong>수많은 드라마와 광고 속 그곳! 스페인 바르셀로나 현재 모습</strong></p>'+
      '<span style="font-size:13px;">여행 플러스 TOUR PLUS</span> <span style="color:grey; font-size:13px;">6일 전</span>'+
    '</div>'+

    '<div class="col-sm-4" style="padding-right:0px;">'+
      '<img src="img/tv6.jpg" width="232px" height="130px" style="margin-bottom:10px;">'+
      "<p><strong>이탈리아 로마에 등장한 '하늘을 나는 다리'</strong></p>"+
      '<span style="font-size:13px;">KBS뉴스</span> <span style="color:grey; font-size:13px;">1주일 전</span>'+
    '</div>'+
  '</div>'+
'</div>';
}

function read_healthy() {
    const array = ['li-read1','li-read2','li-read3','li-read4','li-read5','li-read6','li-read7','li-read8' ];
    for(i=0;i<=7;i++){
        change = document.getElementById(array[i]);
        change.style = 'background-color:white; color:black';
    }

    const color = document.getElementById('li-read6');
    color.style = 'background-color:#6acc59; color:white;';


    const element = document.getElementById('post-wrap');
    element.innerHTML  = 
    
  '<div class="naver-post">'+

    '<div class="post" style="margin-top:15px;">'+
      '<img src="img/h_post1.jpg" width="170px;" height="114px;" align="left" style="margin-right:15px;">'+
      '<span style="color:#6acc59;"><strong>건강</strong></span><br>'+
      "<span><strong>어린이 인싸템 '팝잇'... 집중력 향상 효과는?</strong></span><br>"+
      '<span style="color:#404040">팝잇(Pop-it)은 볼록 튀어나온 부분을 눌러 터뜨리며 갖고 놀 수 있는 실리콘 재질의 뽁뽁 <br>'+
      '이 장난감이다. 올해 상반기 초등학생을 중심으로 크게 유행하기 시작한 이 제품은 다양...</span><br>'+
      '<span style="color:#505050">매경헬스</span> <span style="color:grey;">1주일 전</span>'+
   ' </div>'+

    
    '<div class="post" style="margin-top:15px;">'+
      '<img src="img/h_post2.jpg" width="170px;" height="114px;" align="left" style="margin-right:15px;">'+
      '<span style="color:#6acc59;"><strong>건강</strong></span><br>'+
      '<span><strong>진짜 배고픔? 가짜 배고픔? 어떻게 다를가?</strong></span><br>'+
      '<span style="color:#404040">진짜 배고픔? 가짜 배고픔? 어떻게 다를까?밥을 먹은 지 오래돼 배가 고파지는 ‘진짜 배고 <br>'+
      '픔’과, 밥을 먹은 지 얼마 되지도 않았는데 배가 고파 과식을 하게 되는 ‘가짜 배고픔’, 어...</span><br>'+
      '<span style="color:#505050">헬스컨슈머</span> <span style="color:grey;">4일 전</span>'+
    '</div>'+



    '<div class="post" style="margin-top:15px;">'+
      '<img src="img/h_post3.jpg" width="170px;" height="114px;" align="left" style="margin-right:15px;">'+
      '<span style="color:#6acc59;"><strong>건강</strong></span><br>'+
      "<span><strong>원인 모를 여성의 아랫배 통증, '만성골반통'</strong></span><br>"+
      '<span style="color:#404040">원인 모를 여성의 아랫배 통증 만성골반통 치료법! 만성골반통이란? #만성골반통 은 월경<br>'+
      '주기와 관계없이 불쾌한 하복부 또는 골반내의 통증이 6개월 이상 지속하는 경우를 말합...</span><br>'+
      '<span style="color:#505050">부산대학교병원</span> <span style="color:grey;">5일 전</span>'+
    '</div>'+

    '<div class="post" style="margin-top:15px;">'+
      '<img src="img/h_post4.jpg" width="170px;" height="114px;" align="left" style="margin-right:15px;">'+
      '<span style="color:#6acc59;"><strong>건강</strong></span><br>'+
      "<span><strong>생선회, 안전하게 먹는 법은?</strong></span><br>"+
      "<span style='color:#404040'>바다로 여행을 떠나는 사람이라면 휴가지서 생선회를 먹게 될 텐데요.신선하고 쫀득한 생<br>"+
      '선회를 먹자니 정말로 휴가지에 온 느낌입니다.하지만 더운 여름철에 생선회를 먹다 보...</span><br>'+
      '<span style="color:#505050">하자GO</span> <span style="color:grey;">1주일 전</span>'+
    '</div>'+

  '</div>'+

  '<hr>'+

  '<div class="naver-tv">'+
    '<div class="col-sm-4" style="padding-left:0px; padding:right:0px;">'+
      '<img src="img/h_tv1.jpg" width="232px" height="130px" style="margin-bottom:10px;">'+
      '<p><strong>"1일 1운동 - 척추, 관절 새움병원</strong></p>'+
      '<span style="font-size:13px;">척추, 관절 새움병원</span> <span style="color:grey; font-size:13px;">1개월 전</span>'+
    '</div>'+

    '<div class="col-sm-4">'+
      '<img src="img/h_tv2.jpg" width="232px" height="130px" style="margin-bottom:10px;">'+
      '<p><strong>[건강한편] 낮은 농도의 식초, 백선(무좀)치료 효과가 있다?</strong></p>'+
      '<span style="font-size:13px;">백병원 건강주치의</span> <span style="color:grey; font-size:13px;">2주일 전</span>'+
    '</div>'+

    '<div class="col-sm-4" style="padding-right:0px;">'+
      '<img src="img/h_tv3.jpg" width="232px" height="130px" style="margin-bottom:10px;">'+
      '<p><strong>말 못할 가려움증, 항문 소양증 [건강플러스]</strong></p>'+
      '<span style="font-size:13px;">서울아산병원 건강플러스</span> <span style="color:grey; font-size:13px;">2주일 전</span>'+
    '</div>'+
  '</div>'+
  '<hr>'+

  '<div class="naver-post">'+

    '<div class="post">'+
      '<img src="img/h_post5.jpg" width="170px;" height="114px;" align="left" style="margin-right:15px;">'+
      '<span style="color:#6acc59;"><strong>건강</strong></span><br>'+
      '<span><strong>안과 전문의가 전한 안구질환에 대한 모든 것</strong></span><br>'+
      '<span style="color:#404040">Q. 당뇨가 눈에도 발생할 수 있는건가요?A. 네. 당뇨망막병증이 발생할 수 있습니다. 당뇨<br>'+
        '망막병증은 당뇨 합병증으로 인해 생기는 대표적인 질환으로 당뇨병환자의 30-50%에서...</span><br>'+
      '<span style="color:#505050">현대유비스병원</span> <span style="color:grey;">5일 전</span>'+
    '</div>'+

    '<div class="post" style="margin-top:15px;">'+
      '<img src="img/h_post6.jpg" width="170px;" height="114px;" align="left" style="margin-right:15px;">'+
      '<span style="color:#6acc59;"><strong>건강</strong></span><br>'+
      '<span ><strong>김과 비슷한 파래의 효능 6 </strong></span><br>'+
      "<span style='color:#404040'>파래 효능파래는 갈파래과에 속하는 해조류로 '청태'라고도 한다. 김과 비슷하지만 더 푸르<br>"+
        '고 물결이 잔잔한 바다에서 많이 발견된다. 파래는 독특한 향이 있는 것이 특징이다. 파...</span><br>'+
      '<span style="color:#505050">메디컬리포트</span> <span style="color:grey;">3일 전</span>'+
    '</div>'+

    '<div class="post" style="margin-top:15px;">'+
      '<img src="img/h_post7.jpg" width="170px;" height="114px;" align="left" style="margin-right:15px;">'+
      '<span style="color:#6acc59;"><strong>건강</strong></span><br>'+
      "<span><strong>당뇨병 환자분들, 여름철 슬기롭게 나고 계신가요?</strong></span><br>"+
      '<span style="color:#404040">이번 여름은 뜨거운 폭염으로 인해 활동은 매우 힘들고, 시원한 음료수나 과일의 유혹은 <br>'+
      '많은 계절이었습니다. 이는 당뇨병 환자분들에게는 더욱 힘든 계절이었을 텐데요, 당뇨 ...</span><br>'+
      '<span style="color:#505050">강동경희대학교병원</span> <span style="color:grey;">2일 전</span>'+
    '</div>'+

    '<div class="post" style="margin-top:15px;">'+
      '<img src="img/h_post8.jpg" width="170px;" height="114px;" align="left" style="margin-right:15px;">'+
      '<span style="color:#6acc59;"><strong>건강</strong></span><br>'+
      '<span><strong>심심하다고 틈틈이 간식, 이렇게 조절하세요</strong></span><br>'+
      '<span style="color:#404040">생 사를 위협하는 암과의 사투에서 기사회생한 이들이 이구동성으로 실천하고 있다며 강<br>'+
      '조하는 건강 수칙! ▶1 먹고 또 먹는 과식 끊기다. ▶2 한꺼번에 배불리 먹는 폭시 끊기다...</span><br>'+
      '<span style="color:#505050">건강다이제스트</span> <span style="color:grey;">1주일 전</span>'+
    '</div>'+

  '</div>'+

  '<hr>'+

  '<div class="naver-tv">'+
    '<div class="col-sm-4" style="padding-left:0px; padding-right:0px;">'+
      '<img src="img/h_tv4.jpg" width="232px" height="130px" style="margin-bottom:10px;">'+
      '<p><strong>골프스윙, 이렇게 안하면 허리 망가집니다 | 매경헬스 뉴스리포트</strong></p>'+
      '<span style="font-size:13px;">매경헬스 매일건강예뽀</span> <span style="color:grey; font-size:13px;">1개월 전</span>'+
    '</div>'+

    '<div class="col-sm-4">'+
      '<img src="img/h_tv5.jpg" width="232px" height="130px" style="margin-bottom:10px;">'+
      '<p><strong>척추가 앞으로 밀려나가 발생하는 척추전방전위증</strong></p>'+
      '<span style="font-size:13px;">어울리병원 건강TV</span> <span style="color:grey; font-size:13px;">2주일 전</span>'+
    '</div>'+

    '<div class="col-sm-4" style="padding-right:0px;">'+
      '<img src="img/h_tv6.jpg" width="232px" height="130px" style="margin-bottom:10px;">'+
      "<p><strong>깨끗할수록 알레르기 증가?</strong></p>"+
      '<span style="font-size:13px;">서울대 지식교걍 강연</span> <span style="color:grey; font-size:13px;">2개월 전</span>'+
    '</div>'+
  '</div>'+
'</div>';
}