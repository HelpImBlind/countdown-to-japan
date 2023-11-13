document.addEventListener('DOMContentLoaded', function () {
    // Set the date we're counting down to
    const countDownDate = new Date("December 07, 2023 12:00:00").getTime();

    // Update the countdown every 1 second
    const x = setInterval(function () {
        // Get the current date and time
        const now = new Date().getTime();

        // Calculate the remaining time
        const distance = countDownDate - now;

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result
        document.getElementById("days").innerHTML = formatTime(days);
        document.getElementById("hours").innerHTML = formatTime(hours);
        document.getElementById("minutes").innerHTML = formatTime(minutes);
        document.getElementById("seconds").innerHTML = formatTime(seconds);

        // If the countdown is over, display a message
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "JAPAN!";
        }
    }, 1000);

    // Helper function to add leading zeros
    function formatTime(time) {
        return time < 10 ? "0" + time : time;
    }

    const linkRun = document.getElementById("link");

    // Update the animation speed every second
    const animationUpdateInterval = setInterval(function () {
        // Calculate the total duration of the animation (in seconds)
        const animationDuration = (countDownDate - new Date().getTime()) / 1000;

        // Set the animation duration based on the remaining time
        linkRun.style.animationDuration = animationDuration + "s";

        // If the countdown is over, stop updating the animation speed
        if (animationDuration < 0) {
            clearInterval(animationUpdateInterval);
        }
    }, 1000);
});
