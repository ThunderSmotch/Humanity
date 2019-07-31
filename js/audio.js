//Listener Theme Changing

$(document).ready(function() {
  $('#mute_audio').click(function() {
    let muted = $('#background_audio').prop("muted");
    $("#background_audio").prop("muted",!muted);
    if (muted) {
      $("#background_audio")[0].play();
      $('#mute_audio').text("\uD83D\uDD0A");
    } else {
      $('#mute_audio').text("\uD83D\uDD07");
    }
  })
})
