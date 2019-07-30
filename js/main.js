//On Document Ready
$(window).on('load', function() {
  console.log("Grabbing saved preferences.");

  //Theme
  if (localStorage.getItem("theme")){
    let val = parseInt(localStorage.getItem("theme"));
    $('#selectTheme').val(val);
    changeTheme(val);
  }

  //Initialize Log
  initLog();

  //Timeout for cover to disappear
  setTimeout(function() {
    $("#cover").hide();
  }, 100);
});
