$(document).on("click", "#my-button", function()  { 
  $("#my-div").slideDown(3000,"linear",function() {
  $("#my-div").slideUp();
   });
 });  

