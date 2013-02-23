$(function(){
	console.log('load');

var Timer1; //タイマーを格納する変数（タイマーID）の宣言

//カウントダウン関数を1000ミリ秒毎に呼び出す関数
function start()
{
	CountDown();
  //document.timer.elements[2].disabled=true;
  Timer1 = setInterval(function(){CountDown()}, 1000);
}

//タイマー停止関数
function cancel()
{
  var min = $('#minute').text('01');
  var sec = $('#second_minute').text('00');
  //document.timer.elements[2].disabled=false;
  clearInterval(Timer1);
}

//カウントダウン関数
function CountDown()
{
  //var min=document.timer.elements[0].value;
  //var sec=document.timer.elements[1].value;
  //console.log('CountDown');
    
    

  var min = $('#minute').text();;
  var sec = $('#second_minute').text();
  
  if( (min=="") && (sec=="") )
  {
    alert("時刻を設定してください！");
    ReSet();
  }
  else
  {
    //if (min=="") min=0;
    min=parseInt(min);
    
  //  if (sec=="") sec=0;
    sec=parseInt(sec);
    
    TMWrite(min*60+sec-1);
  }
}

//残り時間を書き出す関数
function TMWrite(int)
{
  int=parseInt(int);
  
  if (int<=0)
  {
    ReSet();
    alert("時間です！");
  }
  else
  {
    //残り分数はintを60で割って切り捨てる
    //document.timer.elements[0].value = htlMath.floor(int/60);
    $('#minute').text(Math.floor(int/60));
    //残り秒数はintを60で割った余り
    //document.timer.elements[1].value=int % 60;
     //document.timer.elements[1].value=int % 60;
    $('#second_minute').text(int % 60);
  }
}

//フォームを初期状態に戻す（リセット）関数
function ReSet()
{
  //document.timer.elements[0].value="0";
  //document.timer.elements[1].value="0";
  //document.timer.elements[2].disabled=false;
  clearInterval(Timer1);
}  

$('.start').click(function(){
	//Timer1=setInterval("CountDown()",1000);
	start();
});

$('.cancel').click(function(){
	cancel();
});

});