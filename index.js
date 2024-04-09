let display = document.querySelector('input');
let buttons = document.querySelectorAll('button');

let buttonsArray = Array.from(buttons);
let string = '';
buttonsArray.forEach(btn => {
    btn.addEventListener('click', (e) => {

        if(e.target.innerHTML === 'Del'){
            string = string.substring(0, string.length - 1);
            display.value = string;
        }else if(e.target.innerHTML === 'Reset'){
            string = '';
            display.value = string;
        }else if  (e.target.innerHTML === '=') {
            try {
                let result = eval(string);
                if (string.includes('/') || string.includes('*')) {
                    result = parseFloat(result.toFixed(3));
                }
                display.value = result;
            } catch (error) {
                display.value = 'Invalid Input';
            }
        }
         
         
        
         else{
            if ((isOperator(e.target.innerHTML) && (string === '' || isOperator(string.charAt(string.length - 1)))) && e.target.innerHTML !== '-') {
                display.value = 'Invalid Input';
            } else {
                string += e.target.innerHTML;
                display.value = string;
            }
        }

        // string += e.target.innerHTML;
        // display.value = string;
        // }
       
        
    });
});

function isOperator(char) {
    return ['+', '*', '/'].includes(char);
}





