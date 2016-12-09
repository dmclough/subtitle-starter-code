$(document).ready(function() {
    // an interval sets up a function to run 10 times a second
    // so it's constantly checking the time of the movie and
    // using that time to decide which subtitle to display.
    setInterval(printTime, 100);

  });

  // Access the current timestamp of the movie
  // and display it on the page.
  function printTime() {
    var movie = $("video")[0];
    var time = movie.currentTime;
    $("#time").text(time);

    // pass the current time to the displaySubtitle function
    displaySubtitle(time);
  }

  // This function should accept time as a paramter
  // and update the DOM to make the proper subtitle appear over the movie.
  function displaySubtitle(time) {

    for (i =0; i < SUBTITLES.length; i++) {
      if (time > netSecondsStart && time < netSecondsStart) {
        $('#line1').append(SUBTITLES[i].line1);
        $('#line2').append(SUBTITLES[i].line2);
      } else {
        $('#line1').append("");
        $('#line2').append("");
      };
    }
  };

  // This function should take time as a parameter and
  // search through a list of subtitles to find and return the
  // one subtitle that should be displayed.
  // If no subtitle should be shown, then this function
  // should return a dummy subtitle object that looks like:
  // {line1: "", line2: ""} with two empty strings
  // so the function looks like it's returning an
  // empty subtitle (and not null) and it won't crash our
  // program.
  function findSubtitle(time) {
    if (isTimeInDuration = true) {
      $('#line1').append(SUBTITLES[i].line1);
      $('#line2').append(SUBTITLES[i].line2);
    } else
      $('#line1').append("");
      $('#line2').append("");
  }

  // This function should accept a current time, and one subtitle
  // object and return true or false depending on if the subtitle
  // should appear on the screen at the given time.
  function isTimeInDuration(time, subtitle) {
    if (time > netSecondsStart[i] && time < netSecondsEnd[i]) {
      return true;
    } else {
      return false;
    }
  };




  // This function should accept a timestamp string and turn it into
  // a number that can be used elsewhere. For instance,
  // timestampToSeconds("00:00:05,580") should return 5.580

function convertToSeconds() {

    // class StartStopObject {
    //   constructor(startTime, endTime, line1, line2) {
    //     this.startTime = startTime;
    //     this.endTime = endTime;
    //     this.line1 = line1;
    //     this.line2 = line2;
    //     }
    // };

      var timeRange = SUBTITLES[i].duration;
      //console.log(timeRange);
      //Get start seconds....
      var milliSecondsStart = parseInt(timeRange.substring(9, 12), 10);
      var secondsStart = parseInt(timeRange.substring(6, 8), 10);
      var minutesStart = parseInt(timeRange.substring(3, 5),10);
      var netSecondsStart = minutesStart * 60  + secondsStart + (milliSecondsStart/1000);
      //console.log("interval start seconds: " + netSecondsStart);

      //Get end seconds....

      var milliSecondsEnd = parseInt(timeRange.substring(26, 29), 10);
      var secondsEnd = parseInt(timeRange.substring(23, 25), 10);
      var minutesEnd = parseInt(timeRange.substring(3, 5),10);
      var netSecondsEnd = minutesEnd * 60  + secondsEnd + (milliSecondsEnd/1000);
      //console.log("interval end seconds: " + netSecondsEnd);
      return(netSecondsStart, netSecondsEnd);

    // for (var i = 0; i < SUBTITLES.length; i++) {
    //   var arr = [];
    //   //create a new object
    //   arr.push(new StartStopObject (netSecondsStart, netSecondsEnd, SUBTITLES[i].line1, SUBTITLES[i].line2));
    // };
  };





// This is a test to see if the findSubtitle function returns the correct
// subtitle for the movie at 82 seconds into the film. The correct subtitle
// is
// { duration: "00:01:21,540 --> 00:01:25,180",
//   line1: "Can I ask your name?", line2: "-Margarethe Lorenz." }
console.log(findSubtitle(82));
