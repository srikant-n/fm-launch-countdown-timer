import './style.less';
import './images/bg-stars.svg';

let day = -1;
let hour = -1;
let minute = -1;
let second = -1;

const padStart2 = (num) => num.toString().padStart(2, '0');

const animateTimer = (title) => {
    $("#" + title + " .flip").addClass("flip-transform");
};

const updateTimer = () => {

    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = (launchDate - now) / 1000;

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
    second = seconds;
    animateTimer("second");
    minute != minutes && animateTimer("minute");
    minute = minutes;
    hour != hours && animateTimer("hour");
    hour = hours;
    day != days && animateTimer("day");
    day = days;

    $(".flip-start").removeClass("flip-start");

    setTimeout(() => {
        $(".day-delay").text(padStart2(days));
        $(".hour-delay").text(padStart2(hours));
        $(".minute-delay").text(padStart2(minutes));
        $(".second-delay").text(padStart2(seconds));

        $(".flip-transform").addClass("flip-start");
        $(".flip-transform").removeClass("flip-transform");
    }, 300);

    // If the count down is finished, do something?
    if (distance <= 0) {
        clearInterval(timer);
    }
};

// Set the date we're counting down to
const launchDate = new Date(new Date().getTime() + (14 * 60 * 60 * 24 * 1000));
updateTimer();
// Update the count down every 1 second
const timer = setInterval(updateTimer , 1000);