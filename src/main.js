import maincss from './style.less';

const padStart2 = (num) => num.toString().padStart(2, '0');

// Set the date we're counting down to
const launchDate = new Date("Feb 28, 2021 15:37:25").getTime();

// Update the count down every 1 second
const timer = setInterval(function() {

  // Get today's date and time
  const now = new Date().getTime();

  // Find the distance between now and the count down date
  const distance = (launchDate - now)/1000;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (60 * 60 * 24));
  const hours = Math.floor((distance % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((distance % (60 * 60)) / (60));
  const seconds = Math.floor((distance % (60)));

  // Display the result in the element with id="demo"
  $(".day").text(padStart2(days));
  $(".hour").text(padStart2(hours));
  $(".minute").text(padStart2(minutes));
  $(".second").text(padStart2(seconds));

  // If the count down is finished, do something?
  if (distance <= 0) {
    clearInterval(timer);
  }
}, 1000);