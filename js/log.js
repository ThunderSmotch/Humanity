//Add Log Message
function logMessage(msg) {
  var log = $("#log");
  log.append('<div class="log-message">'+msg+'</div>');
}

function initLog() {
  logMessage("I wake up.");
}
