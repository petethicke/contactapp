$(function() {
  


  var display_contacts = function(index, contact) {
    var full_name = contact.first_name + " " + contact.last_name;
    $("<p>").css('color', 'blue').text(full_name).appendTo("#results");
    $("<p>").text(contact.email).appendTo("#results");    
    $("<p>").text(contact.phone_number).appendTo("#results");    
  };

  function get_contacts(contacts) {
    $.each(contacts, display_contacts);
  };

  $("#btn").on('click', function() {
    $.getJSON('/list', get_contacts);
    $(this).text("Displaying Contacts").off('click');
  });

});

  // $.ajax({
  //   url: '/list',
  //   dataType: 'json',
  //   type: 'get',
  //   success: function(contacts){
  //     $(contacts).each(function(index, contact){
  //       $("#results").append(contact.first_name);
  //     });
      
  //   }

  // });
 