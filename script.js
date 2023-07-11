
  document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('nav ul li a');
  
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener('click', smoothScroll);
    }
  
    function smoothScroll(event) {
      event.preventDefault();
      var targetId = this.getAttribute('href');
      var targetPosition = document.querySelector(targetId).offsetTop;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });

  function scrollToSection(Categories) {
    const section = document.getElementById(Categories);
    section.scrollIntoView({ behavior: 'smooth' });
  }