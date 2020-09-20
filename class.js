const hello = document.querySelector('.hello');
const add = document.querySelector('#add');
const remove = document.querySelector('#remove');
const toggle = document.querySelector('#toggle');
const check = document.querySelector('#check');
const addAll = document.querySelector('#addAll');
const removeAll = document.querySelector('#removeAll');



add.addEventListener('click', () => {
    hello.classList.add('bg');
})



remove.addEventListener('click', () => {
    hello.classList.remove('bg');
})


toggle.addEventListener('click', () => {
    hello.classList.toggle('bd');
})


check.addEventListener('click', () => {
    hello.classList.check('bg');
})


addAll.addEventListener('click', () => {
    hello.classList.addAll('bg');
})


removeAll.addEventListener('click', () => {
    hello.classList.removeAll('bg');
})