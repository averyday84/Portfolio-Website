/*scroll to top function*/
function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
  
  window.onscroll = function() {
    var button = document.getElementById('return-to-top');
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
      button.style.display = 'block';
    } else {
      button.style.display = 'none';
    }
  };