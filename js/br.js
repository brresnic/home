$( document ).ready(function() {

  $('.half-moon').animate({
    opacity: .4 ,
  }, 3500 );
  $('.cross-stick').animate({
    opacity: .4 ,
  }, 3500 );
  $('#intro').animate({
    opacity: .85 ,
  }, 4000 );

  //no clicks unless selected work
  $('a').click(function(e){
    if($('#de' + $(this).attr('id')[1]).css('opacity') < .8){
         e.preventDefault(); 
    }
  });
  $('a').hover(function(){
    if($('#de' + $(this).attr('id')[1]).css('opacity') < .8){
      $(this).css('cursor','default');
    }
    else{
      $(this).css('cursor','pointer');
    }
  });


  //randomize order of things I am
	var c = [];
	c[0] = "c1";
	c[1] = "c2";
	c[2] = "c3";
	c[3] = "c4";
	c[4] = "c5";
	c = shuffle(c);
	$("#d1").addClass(c[0]);
	$("#d2").addClass(c[1]);
	$("#d3").addClass(c[2]);
	$("#d4").addClass(c[3]);
	$("#d5").addClass(c[4]);

  $(".iDesc").hide();
	$("#circle").hide();
  $("#icons img").css({ opacity: 0.001});;
	$("#circle").fadeIn(1000);
  
  //icons fade in
  $("#icons img").fadeTo(500,1);
  $("#i1").attr('src','assets/ico/catan.jpg');
  $("#i2").attr('src','assets/ico/ls.jpg');
  $("#i3").attr('src','assets/ico/rt.jpg');
  $("#i4").attr('src','assets/ico/yl.jpg');
  $("#i5").attr('src','assets/ico/h2.jpg');
  $("#i6").attr('src','assets/ico/mm.jpg');
  $("#i7").attr('src','assets/ico/nicksnip.jpg');
  $("#i8").attr('src','assets/ico/di.jpg');
  
    $('.ico').hover(
    function(){
      if($(this).css('opacity') >= 0.15){
        dTrigger(['#' + $(this).attr('id')]);
      }
    },
    function(){
    });

    $('.iWrap').click(
    function(){
      //fade in appropriate content  
      if($(this).children('.ico').css('opacity') >= 0.15){
        dTrigger(['#i' + $(this).attr('id')[1]]);
      }
      //if already shown, navigate to link
      if($(this).children('.ico').css('opacity') >= 0.9){
        var id = $(this).attr('id')[1];
        if(id%2 == 0){
          var f = parseInt(id) - 1;
          window.location.href = ($('#r'+ parseInt(f)).attr('href'));
        }
        else {
          var f = parseInt(id) + 1;
          window.location.href = $('#r'+ parseInt(f)).attr('href');
        }
      }
    });

    $('#d1').hover(
      function(){
        $('#circle p').css({"text-shadow": "none",});
        dTrigger(['#i7'],'#434053');
        $('#d1').css({"text-shadow": "0 0 10px #434053"});
        $('#d1').css({"border-left": "2px solid #434053","border-right": "2px solid #434053"});
      });
    $('#d2').hover(
      function(){
        $('#circle p').css({"text-shadow": "none",});
        dTrigger(['#i4','#i6','#i8'],'#E78721');
        $('#d2').css({"text-shadow": "0 0 10px #E78721"});
        $('#d2').css({"border-left": "2px solid #E78721","border-right": "2px solid #E78721"});
      });
    $('#d3').hover(
      function(){
        $('#circle p').css({"text-shadow": "none",});
        dTrigger(['#i3','#i6','#i7'],"#AE7683");
        $('#d3').css({"text-shadow": "0 0 10px #AE7683"});
        $('#d3').css({"border-left": "2px solid #AE7683","border-right": "2px solid #AE7683"});
      });
    $('#d4').hover(
      function(){
        $('#circle p').css({"text-shadow": "none",});
        dTrigger(['#i2','#i8'],'#0de01f');
        $('#d4').css({"text-shadow": "0 0 10px #0de01f"});
        $('#d4').css({"border-left": "2px solid #0de01f","border-right": "2px solid #0de01f"});
      });
    $('#d5').hover(
      function(){
        $('#circle p').css({"text-shadow": "none",});
        dTrigger(['#i1','#i5'],'#FF0000');
        $('#d5').css({"text-shadow": "0 0 10px #FF0000"});
        $('#d5').css({"border-left": "2px solid #FF0000","border-right": "2px solid #FF0000"});
      });
    $('#d1').click(
      function(){
        $('#circle p').css({"text-shadow": "none",});
        dTrigger(['#i7'],'#434053');
        $('#d1').css({"text-shadow": "0 0 10px #434053"});
        $('#d1').css({"border-left": "2px solid #434053","border-right": "2px solid #434053"});
      });
    $('#d2').click(
      function(){
        $('#circle p').css({"text-shadow": "none",});
        dTrigger(['#i4','#i6','#i8'],'#E78721');
        $('#d2').css({"text-shadow": "0 0 10px #E78721"});
        $('#d2').css({"border-left": "2px solid #E78721","border-right": "2px solid #E78721"});
      });
    $('#d3').click(
      function(){
        $('#circle p').css({"text-shadow": "none",});
        dTrigger(['#i3','#i6','#i7'],"#AE7683");
        $('#d3').css({"text-shadow": "0 0 10px #AE7683"});
        $('#d3').css({"border-left": "2px solid #AE7683","border-right": "2px solid #AE7683"});
      });
    $('#d4').click(
      function(){
        $('#circle p').css({"text-shadow": "none",});
        dTrigger(['#i2','#i8'],'#0de01f');
        $('#d4').css({"text-shadow": "0 0 10px #0de01f"});
        $('#d4').css({"border-left": "2px solid #0de01f","border-right": "2px solid #0de01f"});
      });
    $('#d5').click(
      function(){
        $('#circle p').css({"text-shadow": "none",});
        dTrigger(['#i1','#i5'],'#FF0000');
        $('#d5').css({"text-shadow": "0 0 10px #FF0000"});
        $('#d5').css({"border-left": "2px solid #FF0000","border-right": "2px solid #FF0000"});
      });

    //audio animation trigger
    // var aud = document.getElementById("intro");
    // aud.oncanplay = function() {
    //     //alert("Can start playing audio");
    // };
    // aud.onplay = function() {
    //     alert("The audio has started to play");
    // };

});

function dTrigger(t, color){
  //unqueue previous animations
  $('.ico').clearQueue();
  $('.ico').stop();
  $('.iDesc').clearQueue();
  $('.iDesc').stop();

  //execute the animation that was just triggered
  dUnTrigger(t);//fades all non-selected to 0.2 opacity
  t.forEach(function(e){//fades selected to full
    console.log('e',e);
    $(e).fadeTo(450,1);
    $(e).removeClass('btm').addClass('top');
    if(e[2]%2 == 0){
      var f = parseInt(e[2]) - 1;
      $('#de'+ parseInt(e[2])).delay(100).fadeTo(200,0);
    }
    else {
      var f = parseInt(e[2]) + 1;
      $('#de'+ parseInt(e[2])).delay(100).fadeTo(200,0);
    }
    $('#i' + f).fadeTo(350,0);
    $('#de'+ f).delay(150).fadeTo(200,1);

    if(color){
      //$('#i1').css({"box-shadow": "inset 0 0 5px " + color});
      $('#de' + f + ' a').css({"text-shadow": "0 0 3px " + color});
      if(e[2]%2 == 0){
        $('#i' + f + '_wrap').css({"border-left": "3px solid" + color});
        //$('#i' + parseInt(e[2]) + '_wrap').css({"border-right": "3px solid" + color});
      }
      else{
        $('#i' + f + '_wrap').css({"border-right": "3px solid" + color});
        //$('#i' + parseInt(e[2]) + '_wrap').css({"border-left": "3px solid" + color});
      }
      //$('#de' + f + ' p').css({"text-shadow": "0 0 3px " + color});
    }
  });
}

//untriggers all except u
//removes all shadows
//sets z-index of icons
function dUnTrigger(u){
  t = ['#i1','#i2','#i3','#i4','#i5','#i6','#i7','#i8'];
  $('.ico').removeClass('top').addClass('btm');
  $('.iDesc a').css({"text-shadow":"none"});
  $('#circle p').css({"text-shadow":"none"});
  $('#circle p').css({"border-right": "none","border-left": "none"});
  $('.iWrap').css({"border-right": "none","border-left": "none"});
  for(var y = 0; y < t.length; y++){

    var exclude = false;
    for(var i = 0; i < u.length; i++){ 
      if(u[i] === t[y]){
        exclude = true;
      }
      else if(u[i][2]%2 == 0){
        if(('#i'+(u[i][2]-1)) === t[y]){
          exclude = true;
        }
      }
      else if(u[i][2]%2 != 0){
        if(('#i'+(parseInt(u[i][2])+1)) === t[y]){
          exclude = true;
        }
      }
    }
    if(!exclude){//if not excluded
      $(t[y]).fadeTo(300,0.28);
      $('#de' + t[y][2]).fadeTo(300,0);
    }
  }
}



//fischer-yates shuffle
function shuffle(array) {
  var currentIndex = array.length
    , temporaryValue
    , randomIndex
    ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}