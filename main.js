"use strict";


function loadPage(pwd) {

  var hash= pwd;
  hash= Sha1.hash(pwd);
  console.log(hash);
  var url= hash + "/index.html";

  $.ajax({
    url : url,
    dataType : "html",
    success : function(data) {
      window.location= url;
    },
    error : function(xhr, ajaxOptions, thrownError) {
      parent.location.hash= hash;
      $("#password").attr("placeholder","wrong password");
      $("#password").val("");
    }
  });
}


$("#loginbutton").on("click", function() {
  loadPage($("#password").val());
});
$("#password").keypress(function(e) {
  if (e.which == 13) {

    loadPage($("#password").val());
  }
});
$("#password").focus();
