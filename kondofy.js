javascript:
(function(){

  var s=document.createElement('div');
  s.innerHTML='<img src="https://i.imgur.com/eUXXyEh.png" style="width:200px;height:150px;">';
  s.style.color='black';
  s.style.padding='20px';
  s.style.position='fixed';
  s.style.zIndex='9999';
  s.style.fontSize='3.0em';
  s.style.right='40px';
  s.style.top='40px';
  var links = document.getElementsByTagName("a");
  links.pointerEvents = "none";
  document.body.appendChild(s);
  var d=document,useMine=true,prevEl;
  function AddHandler(orig,mine) {
    return function(e){
      if(useMine)
        mine(e);
      else
        if(orig)
          orig(e);
    }
    ;
  }
  function Myonmouseover(e) {
    var evt=e||window.event;
    var elem=evt.target||evt.srcElement;
    elem.style.outline='2px solid pink';
    prevEl=elem;
    s.style.display='block';
  }
  function Myonmouseout(e){
    var evt=e||window.event;
    var elem=evt.target||evt.srcElement;
    elem.style.outline='';
  }
  function Myonclick(e){
    var evt=e||window.event;
    var elem=evt.target||evt.srcElement;
    elem.style.display='none';
    s.style.display='none';
  }
  function Myonkeydown(e){
    var evt=e||window.event;
    if(evt.keyCode==27){
      prevEl.style.outline='';
      useMine=false;
      s.style.display='none';
      links.pointerEvents = "";
    }
  }
  d.onmouseover=AddHandler(d.onmouseover,Myonmouseover);
  d.onmouseout=AddHandler(d.onmouseout,Myonmouseout);
  d.onclick=AddHandler(d.onclick,Myonclick);
  d.onkeydown=AddHandler(d.onkeydown,Myonkeydown);
}
)()
