//Change Theme
function changeTheme(value) {
  switch (value) {
    case 1:
      $("#ref-css").attr("href", "css/bootstrap.min.css");
      console.log(1);
      break;
    case 2:
      $("#ref-css").attr("href", "css/flatly.min.css");
      break;
    case 3:
      $("#ref-css").attr("href", "css/darkly.min.css");
      break;
    default:
      //$("#ref-css").attr("href", "css/bootstrap.min.css");
  }
  console.log("Theme Changed - " + value);
  localStorage.setItem("theme", value);
}

//Listener Theme Changing
$(function() {
  $('#selectTheme').change(function() {
    var value = parseInt($(this).val());
    changeTheme(value);
  })
})

//On Document Ready
$(window).on('load', function() {
  console.log("Grabbing saved theme.");
  if (localStorage.getItem("theme"))
    changeTheme(parseInt(localStorage.getItem("theme")));

  setTimeout(function() {
    $("#cover").hide();
  }, 500);
});
