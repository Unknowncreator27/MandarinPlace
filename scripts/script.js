document.addEventListener("DOMContentLoaded", () => {

    const countdownHasStarted = document.getElementById("countdown");
    const dayText = document.getElementById("days");
    const hoursText = document.getElementById("hours");
    const minutesText = document.getElementById("minutes");
    const secondsText = document.getElementById("seconds");
    const noodleLogo = document.getElementById("noodle-logo");
    const toggle = document.getElementById("bgToggle");

    const noodleAssets = [
        // 'res/noodles-takeout.png',
        // 'res/noodle-pasta-long.png',
        'res/chopsticks-no-bg.png',
        // 'res/chinese_takeout_container.png',
        // 'res/chinese_takeout_w_chopsticks.png'
        // Add More
    ];

    let animationRunning = false;

    // start date of the event
    const eventDate = new Date("2025-07-25T13:15:00").getTime();

    noodleLogo.addEventListener("click", ()=> {
        goToMain()
    });

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

    function goToMain(){
        window.location.replace("./main.html");
    }

    

    //Test code

    function checkIfAllItemsFell() {
        const checker = setInterval(() => {
            const remaining = document.querySelectorAll('.falling-item');
            if(remaining.length === 0){
                clearInterval(checker)
            }
        }, 500);
    }
    function createFallingObjects(){
        if(!animationRunning) return;

        const obj = document.createElement("img");
        obj.src = noodleAssets[Math.floor(Math.random() * noodleAssets.length)];
        obj.className = "falling-item";
        obj.style.left = Math.random() * window.innerWidth + "px";
        obj.style.animationDuration = 3 + Math.random() * 5 + "s";
        document.body.appendChild(obj);

        setTimeout(() => obj.remove(), 10000); // removes after 10 seconds
    }

    let fallInterval = null;
    toggle.addEventListener("change", () => {
        if(toggle.checked){

            animationRunning = true;
            fallInterval = setInterval(createFallingObjects, 300);
            localStorage.setItem('fallingNoodles', 'on');
        } else {
            animationRunning = false;
            clearInterval(fallInterval);
            checkIfAllItemsFell();
            localStorage.setItem('fallingNoodles', 'off');
        }
    });

    if(localStorage.getItem('fallingNoodles') === 'on'){
        toggle.checked = true;
        animationRunning = true;
        fallInterval = setInterval(createFallingObjects, 300);
    }
    // End Of test code
});