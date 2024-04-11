'use strict';

const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

const getRandomColor = () => {
  let ans = '#';
  for (let i = 0; i < 6; i++) {
    const randomNumber = Math.floor(Math.random() * list.length);
    ans += list[randomNumber];
  }
  return ans;
};

btn.addEventListener('click', function () {
  document.body.style.backgroundColor = getRandomColor();
  color.textContent = getRandomColor();
});
