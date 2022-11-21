
const counters = document.querySelectorAll('.counter');
const incrementSpeed = 200;

counters.forEach((counter) => {

    function updateCounter(){
        let counterValue = parseInt(counter.innerText);
        let counterTarget = parseInt(counter.getAttribute('data-count-target'));
        let increment = Math.ceil(counterTarget / incrementSpeed);
        let counterSpeed = parseInt(counter.getAttribute('data-count-speed'));


        if(counterValue < counterTarget){

            counter.innerText = counterValue + increment;
            setTimeout(updateCounter, counterSpeed);
        }else{

            counter.innerText = counterTarget;
        }

    }

    updateCounter();


});