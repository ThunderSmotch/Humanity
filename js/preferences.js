//Change Theme
function changeTheme(value) {
  switch (value) {
    case 1:
      $("#ref-css").attr("href", "css/bootstrap.min.css");
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
  localStorage.setItem("theme", value);
}

//Listener Theme Changing
$(function() {
  $('#selectTheme').change(function() {
    var value = parseInt($(this).val());
    changeTheme(value);
  })
})
