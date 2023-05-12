(function(){
    let screen = document.querySelector('.screen');
    let btn = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');
    let zero = document.querySelector('.btn-zero');
    let negate = document.querySelector('.btn-negate');

    // when there is a click, check which button was pushed
    btn.forEach(function(button) {
        // check if event (click) occurs. if event occurs, run function
        button.addEventListener('click', function(e){
            let value = e.target.dataset.num;
            screen.value += value;
        });
    });

    // checking for click on "="
    equal.addEventListener('click', function(e){
        if(screen.value === '') {
            screen.value = '';
        } else {
            let expression = screen.value;

            // Remove trailing operators
            while (isOperator(expression[expression.length - 1])) {
                expression = expression.slice(0, -1);
            }

            let answer = evaluateExpression(expression);
            screen.value = answer;
        }
    });

    clear.addEventListener('click', function(e){
        screen.value = '';
    });

    function isOperator(character) {
        return ['+', '-', '*', '/'].includes(character);
    }

    function evaluateExpression(expression) {
        try {
            let result = eval(expression);
            return result;
        } catch (error) {
            console.error('Error evaluating expression:', error);
            return 'Error';
        }
    }
})();
