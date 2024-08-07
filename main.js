import factorial from "./Factorial.js";
import subfactorial from './SubFactorial.js';
import doubleFactorial from './DoubleFactorial.js';
import Fibonacci from './Fibonacci.js';
import createMessage from './Message.js';
import isPrime from './isPrime.js';

for(const name of Object.getOwnPropertyNames(Math)) {
    globalThis[name] = Math[name];
}

const radioButtons = Array.from(document.getElementsByName('value'));
const result = document.querySelector('.result');
const show = document.querySelector('button');
const copy = document.querySelectorAll('button')[1];
const generate = document.querySelectorAll('button')[3];
const generatorResult = document.getElementById(`generator-result`);

const showAnswer = () => {
    const value = document.getElementById('user-input').value;
    const selectedRadio = radioButtons.find(val => val.checked);
    if (selectedRadio) {
        switch (selectedRadio.value) {
            case 'factorial':
                result.style.color = 'black';
                return result.value = `The ${value}! is: ${factorial(value)}.`;
            case 'double-factorial':
                result.style.color = 'black';
                return result.value = `The ${value}!! is: ${doubleFactorial(value)}.`;
            case 'subfactorial':
                result.style.color = 'black';
                return result.value = `The !${value} is: ${subfactorial(value)}.`;
            case 'Fib':
                result.style.color = 'black';
                return result.value
                    = `The ${value}${value === 1 ? 'st' : value === 2 ? 'nd' : 'th'} Fibonacci's number is : ${Fibonacci(value)}.`;
            case 'isPrime':
                return result.value = isPrime(value);
            case 'calculator':
                return result.value = eval(value);
            default:
                result.style.color = '#5f021f';
                return result.value = `Unable to get the answer: Please select any value.`;
        }
    }
}

const copyAnswer = () => {
    const copiedValue = document.querySelector('.result');
    if (copiedValue.value) {
        copiedValue.select();
        document.execCommand('copy');
        return createMessage('The answer copied to clipboard.');
    } else {
        return createMessage(`There's nothing to copy.`);
    }
}

const generateRandomNum = () => {
    const min = Number(document.getElementById('min').value);
    const max = Number(document.getElementById('max').value);
    if (!min || !max) {
        generatorResult.style.color = '#5f021f';
        return generatorResult.value
            = `Can't generate an integer: Min or Max value can't be empty. Input something.`;
    }
    if (min >= max) {
        generatorResult.style.color = '#5f021f';
        return generatorResult.value = `Can't generate an integer: Min value should be less than max.`;
    }
    generatorResult.style.color = 'black';
    return generatorResult.value
        = `The random integer between [${min};${max}] is: ${Math.round(Math.random() * (max - min) + min)}`;
};

show.addEventListener('click', showAnswer);
copy.addEventListener('click', copyAnswer);
document.addEventListener('keyup', (event) => {
    event.key === 'Enter' ? showAnswer() : null;
    event.altKey && event.key === 'r' ? document.getElementById('number').focus() :
        event.altKey && event.key === 'c' ? copyAnswer() :
            event.altKey && event.key === 'g' ? generateRandomNum() :
                event.altKey && event.key === 'm' ? document.getElementById(`min`).focus() : null;
});
generate.addEventListener('click', generateRandomNum);

console.log(log(5));
