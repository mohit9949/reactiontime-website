var total_results=new Array();
var start;
var clicked;
var count=0;
function disappear(){
  document.getElementById('box').style.display='none';
}
disappear();
function onclicked(){
  appear();
}
function disappear2(){
  document.getElementById('box').style.display='none';
  clicked=Date.now();
  var reactiontime=(clicked-start)/1000;
  //alert(reactiontime);
  document.getElementById('results').innerHTML="Reaction time: "+reactiontime+" seconds";
  total_results.push(reactiontime);
  count++;
  document.getElementById('Counter').innerHTML="Count: "+count;
  if(count==10){
    disappear();
    var sum=0;
    for(i=0;i<total_results.length;i++){
      sum+=total_results[i];
    }
    var avg=sum/total_results.length;
    document.getElementById('results').innerHTML="Your Avg Reaction Time is: "+avg+" seconds";
    document.getElementById('results').style.color="red";

  }
  else{
    var randomDelay=((Math.random()*3)+2)*1000;
    setTimeout(appear,randomDelay);
  }

}
function appear(){
  var randomTop=(Math.random()*400);
  var randomLeft=(Math.random()*300);
  var randomHeight=(Math.random()*200+10);
  var randomWidth=(Math.random()*200+10);
  var randomCurve=Math.random();
  var color="#"+((1<<24)*Math.random()|0).toString(16);
  if(randomCurve<0.5){
    document.getElementById('box').style.borderRadius=25+'px';

  }
  else{
    document.getElementById('box').style.borderRadius=0+'px';

  }
  document.getElementById('box').style.backgroundColor=color;
  document.getElementById('box').style.marginTop=randomTop+'px';
  document.getElementById('box').style.marginLeft=randomLeft+'px';
  document.getElementById('box').style.height=randomHeight+'px';
  document.getElementById('box').style.width=randomWidth+'px';
  document.getElementById('box').style.display='block';
  start=Date.now();

}
