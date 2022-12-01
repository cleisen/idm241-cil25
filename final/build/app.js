$('.add').on('click', function() {
    $(this).toggleClass('added just-added');
    $(this).mouseleave(function() {
      $(this).removeClass( "just-added" );
    });
  });