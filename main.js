$(document).ready(function() {
  var count = parseInt($("#time").html());
  // var upCount = parseInt($("#time").html());
  // var breakCount = parseInt($("#breakTime").html());
  var breakUpCount = parseInt($("#breakTime").html());

  $("#start").click(function() {
    var counter = setInterval(timer, 1000);

    function timer() {
      $("#start, #addButton, #minusButton, #break, #title1").hide();
      $("#timeType").html("Session Time:");
      count -= 1;
      if (count === 0) {
        // alert("Times up!");
        clearInterval(counter);
        var startBreak = setInterval(breakTimer, 1000);
        $("#time").hide();
      }
      $("#time").html(count);

      //Transition from session time to break time
      function breakTimer() {
        $("#timeType").html("Break Time:");
        $("#break").show();
        breakUpCount -= 1;
        if (breakUpCount === 0) {
          // alert("Break time is over!");
          clearInterval(startBreak);
          $("#resetButton").show();
          $("#breakTime, #timeType").hide();
        }
        $("#breakTime").html(breakUpCount);
      }
    }
  });

  // Hide reset button
  $("#resetButton").hide();

  $("#resetButton").click(function() {
    count = 25;
    breakTime = 25;
    $("#time").html(count);
    $("#breakTime").html(breakTime);
    $(
      "#start, #addButton, #minusButton, #break, #title1, #time, #breakTime"
    ).show();
    $("#timeType, #resetButton").hide();
  });

  // Decrease session time
  $("#minusButton").click(function() {
    if (count > 5) {
      count -= 5;
      $("#time").html(count);
    }
  });

  // Increase session time
  $("#addButton").click(function() {
    count += 5;
    $("#time").html(count);
  });

  // Decrease break time
  $("#minusBreak").click(function() {
    if (breakUpCount > 5) {
      breakUpCount -= 5;
      $("#breakTime").html(breakUpCount);
    }
  });

  // Increase break time
  $("#addBreak").click(function() {
    breakUpCount += 5;
    $("#breakTime").html(breakUpCount);
  });
});
