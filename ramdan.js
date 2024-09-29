var ramadanStartDate = new Date("2025-03-10T00:00:00").getTime(); // Set the default date for Ramadan

function updateCountdown() {
    var now = new Date().getTime();
    var distance = ramadanStartDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = String(days).padStart(2, '0');
    document.getElementById("hours").innerText = String(hours).padStart(2, '0');
    document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');

    if (distance < 0) {
        clearInterval(interval);
        document.getElementById("countdown").innerHTML = "Ramadan has started!";
    }
}

var interval = setInterval(updateCountdown, 1000);
