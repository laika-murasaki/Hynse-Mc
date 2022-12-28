var countdown = function() {
    // Get the current time in milliseconds
    var currentTime = new Date().getTime();
  
    // Set the target time to 01/01/2023 00:00:00 in milliseconds
    var targetTime = new Date("01/01/2023 00:00:00").getTime();
  
    // Calculate the time remaining in seconds by subtracting the current time from the target time and dividing by 1000 (to convert milliseconds to seconds)
    var timeRemaining = (targetTime - currentTime) / 1000;
  
    // Calculate the number of days, hours, minutes, and seconds remaining
    var days = Math.floor(timeRemaining / (24 * 60 * 60));
    var hours = Math.floor((timeRemaining % (24 * 60 * 60)) / (60 * 60));
    var minutes = Math.floor((timeRemaining % (60 * 60)) / 60);
    var seconds = Math.floor(timeRemaining % 60);
  
    // Return the time remaining in the format "day:hour:min:second"
    return "&7[&b" + days + "&7]วัน &7[&b" + hours + "&7]ชั่วโมง &7[&b" + minutes + "&7]นาที [&b" + seconds + "&7]วินาที";    
  }
  
 countdown();
  