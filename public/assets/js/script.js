$(document).ready(function() {
    
  $(".devourit").on("click", function(event) {
    event.preventDefault();

    var burger_id = $(this).val();
    console.log("JMF");
    console.log(burger_id);
    $.ajax({
      method: "PUT",
      url: "/burgers/" + burger_id
    }).then(function(data) {
      // reload page to display devoured burger in proper column
      location.reload();
    });

  });
});
