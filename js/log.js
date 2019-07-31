//Add Log Message
function logMessage(msg) {
  var log = $("#log");
  log.append('<div class="log-message">' + msg + '</div>');
}

//Logs messages from array
function logMessages(arr) {
  logMessageArray(arr, arr.length, 0);
}

//Hack to pause before sending another message to the log
function logMessageArray(arr, length, i){
  if( i >= length  ) return;

  setTimeout(function() {
    logMessage(arr[i++]);
    logMessageArray(arr, length, i);
  }, 2000);

}

function storyIntro() {
  logMessages(dataStory["intro"]);
}

function initLog() {
  logMessage("I wake up.");
  storyIntro();
}
