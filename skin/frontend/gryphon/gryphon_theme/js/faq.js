jQuery(document).ready(function($) {

  $('#gryphon-faq').gryphon_faq({});

  $("#monogram-page-faq-sidebar").find("li").first().children('a').addClass('active');
  $("#monogram-page-faq-sidebar").find("li a").click(function(){
    // $("#monogram-page-faq-sidebar").find("li").first().children('a').removeClass('active');
    $('.active').removeClass('active');
    $(this).addClass('active');
  });

});