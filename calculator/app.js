(function(){
    let screen = document.querySelector('.screen');
    let btn = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');
    let zero = document.querySelector('.btn-zero');
    let negate = document.querySelector('.btn-negate');

    // when there is a click, check which buton was pushed
    btn.forEach(function(button) {
        // check if event (click) occurs. if event occurs, run function
        button.addEventListener('click', function(e){
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });

    // checking for click on "="
    equal.addEventListener('click', function(e){
        if(screen.value === '') {
            screen.value = "";
        } else {
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })


    clear.addEventListener('click', function(e){
        screen.value = "";
    })
})();