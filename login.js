function login(){
    var id=document.getElementById("ID").value;
    var pw=document.getElementById("PW").value;

    if(id=='admin')
    {
      if(pw=='naver')
      {
        alert("로그인에 성공하였습니다.");
        window.location.assign('naver_after_login.html');
      }

      else {alert("아이디 또는 비밀번호가 맞지 않습니다. 다시 시도해주세요");}
    }
    else {alert("아이디 또는 비밀번호가 맞지 않습니다. 다시 시도해주세요");}

  }

  function logout(){
    
    alert("로그아웃이 성공적으로 되었습니다.");
    window.location.assign('naver.html');
    
  }