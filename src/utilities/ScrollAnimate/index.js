import $ from 'jquery';

export const startAtBottom = () => {
  $(function() { 
    window.scrollTo(0, document.body.offsetHeight); 
  });
};

export const arrivalAnimate = () => {
  $(function() {
    $(window).scroll(function() {
      let windowPos = $(this).scrollTop();
      $('.encounter__img').each(function() {
        if ($(this).position().top > windowPos) {
          $(this).css({
            opacity:1, 
            height:'15rem', 
            width:'15rem', 
            transform:'scale(1)'
          });
        }
      });
      if (windowPos < 500) {
        $('.space').show();
        $('.planet__info').delay(4000).fadeIn(2000);
        $('.retire_btn').delay(6000).fadeIn(800);
      } else {
        $('.space').hide();
        $('.planet__info').hide();
      }
    });
  });
};

export const handleScroll = (parent, child) => {
  $(function(){
    let scroll = 0;
    $(parent).scroll(function(){
      let moved = $(this).scrollTop();
      if (moved > scroll) $(child).addClass('smaller');
      if (moved === 0) $(child).removeClass('smaller');
      scroll = moved;
    });
  });

};