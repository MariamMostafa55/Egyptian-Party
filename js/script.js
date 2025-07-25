//================HomeSection=======================
$(".home-btn").on("click", function () {
  $(".home-nav").css("left", "0");
  $('.home-btn').css("left",'240px')
});



$(".home-nav  i").on("click", function () {
  $(".home-nav").css("left", "-250px");
  $('.home-btn').css("left",'0px')
});


//================Signers============================

$('.signers-content .signerhead').click(function(){
  $('.signerDetails').not($(this).next()).slideUp(700);
  $(this).next().slideToggle(700);
   
})

//==============Counter==============================

function updateCounter() {
  
  const targetDate = new Date("2030-12-31T23:59:00");
  const now = new Date();
  const diff = targetDate - now;

  if (diff > 0) {
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const second = Math.floor((diff / (1000)) % 60);



    $('.count-day').text(days + ' D');;
    $('.count-hour').text(hours + ' H');
    $('.count-minute').text(minutes  + ' M');
    $('.count-second').text(second  + ' S');
    
  } else {
    $('.count-day').text("0");
    $('.count-hour').text("0");
    $('.count-minute').text("0");
    $('.count-second').text("0");
  }
}

setInterval(updateCounter, 1000);
updateCounter();


//====================Contact===============

let maxlength = 100;

$('textarea').on('input', function(){
  let text = $(this).val();
  if(text.length >= maxlength){
    $(this).val(text.substring(0, maxlength));
    $('.area-count').text('your available character finished');
  } else {
    $('.area-count').text(maxlength - text.length);
  }
});