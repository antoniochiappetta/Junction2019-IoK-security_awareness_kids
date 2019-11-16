$(document).ready(function() {
  
    // Vars
    var modBtn  = $('#modBtn'),
        modal   = $('#modal'),
        close   = modal.find('.close'),
        modContent = modal.find('.modal-content');
    
    // open modal when click on open modal button 
    modBtn.on('click', function() {
      modal.css('display', 'block');
    });
    
    // close modal when click on close button or somewhere out the modal content 
    $(document).on('click', function(e) {
      var target = $(e.target);
      if(target.is(modal) || target.is(close)) {
          modal.css('display', 'none');
      }
    });
  });