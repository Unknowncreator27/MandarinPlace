document.addEventListener("DOMContentLoaded", () => {

    const countdownHasStarted = document.getElementById("countdown");
    const dayText = document.getElementById("days");
    const hoursText = document.getElementById("hours");
    const minutesText = document.getElementById("minutes");
    const secondsText = document.getElementById("seconds");

    // start date of the event
    const eventDate = new Date("2025-07-25T13:15:00").getTime();

    const countdownFunc = setInterval(() => {
        const now = new Date().getTime();
        const distance = eventDate - now

        if(distance < 0){
            clearInterval(countdownFunc)
            
            countdownHasStarted.innerHTML = "The countdown has started."
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 *60 *24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        dayText.innerText = days.toString().padStart(2, "0");
        hoursText.innerText = hours.toString().padStart(2, "0");
        minutesText.innerText = minutes.toString().padStart(2, "0");
        secondsText.innerText = seconds.toString().padStart(2, "0");
    }, 1000);
});