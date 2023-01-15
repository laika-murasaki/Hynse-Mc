var countdown = function() {
    // Get the current time in milliseconds
    var currentTime = new Date().getTime();
  
    // Set the target time to 01/01/2023 00:00:00 in milliseconds
    var targetTime = new Date("01/01/2023 00:00:00").getTime();
  
    // Calculate the time remaining in seconds by subtracting the current time from the target time and dividing by 1000 (to convert milliseconds to seconds)
    var timeRemaining = (targetTime - currentTime) / 1000;
  
    // Round the result to an integer using toFixed
    return timeRemaining.toFixed(0);
}

countdown();