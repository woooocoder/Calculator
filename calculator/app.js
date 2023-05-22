// Get the calculator screen and buttons
const screen = document.querySelector('.screen');
const btn = document.querySelectorAll('.btn');

// Add event listeners to each button
btn.forEach(button => {
  button.addEventListener('click', () => {
    // Get the clicked button's value
    const value = button.dataset.num;
    
    // Handle button clicks
    switch (value) {
        case 'AC':
            screen.value = '';
            break;
        case '+/-':
            screen.value = parseFloat(screen.value) * -1;
            break;
        case '%':
            screen.value = parseFloat(screen.value) / 100;
            break;
        case '=':
            try {
                let net = eval(screen.value);
                screen.value = net;
                if (screen.value.toString().length > 9) screen.value = net.toExponential(5);
              } catch (error) {
                screen.value = 'Error';
              }
            break;
        default:
            screen.value += value;
        }
    });
});
