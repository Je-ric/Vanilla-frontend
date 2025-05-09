const areas = document.querySelectorAll('.direction-area');
    
    areas.forEach(area => {
      area.addEventListener('mouseenter', function() {
        console.log('Direction: ' + this.getAttribute('data-direction'));
      });
    });