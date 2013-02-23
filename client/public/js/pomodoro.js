$(function(){

var Timer1; //タイマーを格納する変数（タイマーID）の宣言
var completeCount = 0;
var cancelCount = 0;
var compteDate = '';

//カウントダウン関数を1000ミリ秒毎に呼び出す関数
function start()
{
  $('.start').attr('disabled', true);
  $('.complete').attr('disabled', true);
  CountDown();
  Timer1 = setInterval(function(){CountDown()}, 1000);
}

//タイマー停止関数
function cancel()
{
  cancelCount++;
  countSet();
  ReSet();
  //clearInterval(Timer1);
}

//カウントダウン関数
function CountDown()
{
  var min = $('#minute').text();;
  var sec = $('#second_minute').text();

  if( (min=="") && (sec=="") )
  {
    alert("時刻を設定してください！");
    ReSet();
  }
  else
  {
    min=parseInt(min);
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
    completeCount++;
    alert("時間です！");
    countSet();
    $('.start').attr('disabled', false);
  }
  else
  {
    //残り分数はintを60で割って切り捨てる
    $('#minute').text(Math.floor(int/60));
    //残り秒数はintを60で割った余り
    $('#second_minute').text(int % 60);
  }
}

//フォームを初期状態に戻す（リセット）関数
function ReSet()
{
  var min = $('#minute').text('00');
  var sec = $('#second_minute').text('10');
  $('.date').val('');
  $('.start').attr('disabled', false);
  $('.complete').attr('disabled', false);
  clearInterval(Timer1);
}

//カウント数セット
function countSet()
{
  //alert(completeCount);
  //alert(cancelCount);
  $('#completeCount').text(completeCount);
  $('#cancelCount').text(cancelCount);
}


$('.start').click(function(){
  start();
});

$('.cancel').click(function(){
  cancel();
});

$('.complete').click(function(){

  var date = $('.date').val();

  if($('.date').val().length === 0){
    alert('日付を入力してください。');
    return false;
  }

  if(date.match(/[^0-9]+/)) {
    alert('日付は半角数字を入力してください。');
    return false;
  }

  if($('.date').val().length < 8){
    alert('日付は8桁入力してください。');
    return false;
  }

  //$.get('http://manufacture-sapporo.com:1337/pomodolo/history',
  // キーワードをパラメータとして追加
  //function(data) { // コールバック関数で結果データを処理
  //  console.log("Remote Data: " + data);
    //console.log(data.Remote Data);
  //  var parse = JSON.parse(data);
  //  console.log(parse.);
   //$.each(parse,function(){

    //});
  //}
//);

/*
  $.ajax({
  　url : 'http://localhost:3000/pomodolo/result',
  　type : 'get',
    data: {
        date: date,
        complete: completeCount,
        cancel: cancelCount
    },
  　success : function(data){
      consol.log('success');
      ReSet();
  　},
  　error : function(){
      alert('error');
  　}
  });
*/
});


});
