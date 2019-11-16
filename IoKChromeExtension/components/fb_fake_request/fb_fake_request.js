$(document).ready(function() {

    var el = document.getElementsByClassName('_4962')[0];
    var newEl = document.createElement('button');
    newEl.setAttribute("id", "modBtn");
    newEl.classList.add("fake_modal-btn");
    el.style.display = "none";

    el.parentNode.replaceChild(newEl, el);


    var popup = document.createElement('div');
    popup.innerHTML = '<div id="fake_modal" class="fake_modal"><!-- Modal Content --><div class="fake_modal-content"><!-- Modal Header --><div class="fake_modal-header"><h3 class="">Friend requests</h3><div class="close fa fa-close"></div></div><!-- Modal Body --><div class="fake_modal-body"><img class="fake_pic" style="-webkit-user-select: none;margin: auto; border-radius: 100%;" width="100" src="chrome-extension://'+ chrome.i18n.getMessage("@@extension_id") +'/components/fb_fake_request/pics/image.jpg"><div class="fake_name_container"><p class="fake_name">Alexis Brown</p><p>0 mutual friends</p><a href="#"><div class="fake_accept_button">Confirm</div></a><a href="#"><div class="fake_decline_button">Delete</div></a></div></div></div></div>';

    document.getElementsByTagName("body")[0].appendChild(popup);


    // Vars
    var modBtn  = $('#modBtn'),
        fake_modal   = $('#fake_modal'),
        close   = fake_modal.find('.close');
    
    // open fake_modal when click on open fake_modal button 
    modBtn.on('click', function() {
      fake_modal.css('display', 'block');
    });
    
    // close fake_modal when click on close button or somewhere out the fake_modal content 
    $(document).on('click', function(e) {
      var target = $(e.target);
      if(target.is(fake_modal) || target.is(close)) {
          fake_modal.css('display', 'none');
      }
    });
});