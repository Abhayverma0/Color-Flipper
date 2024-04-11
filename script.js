'use strict';

const colors = [
  '#FF6B6B',
  '#FF6E6E',
  '#FF7575',
  '#FF7C7C',
  '#FF8383',
  '#FF8A8A',
  '#FF9292',
  '#FF9999',
  '#FFA0A0',
  '#FFA7A7',
  '#FFADAD',
  '#FFB4B4',
  '#FFBDBD',
  '#FFC5C5',
  '#FFCBCB',
  '#FFD2D2',
  '#FFD9D9',
  '#FFE0E0',
  '#FFE7E7',
  '#FFEEEE',
  '#FFF5F5',
  '#FFFDFD',
  '#F9F9F9',
  '#F2F2F2',
  '#ECF5FD',
  '#E7F0FC',
  '#E1E9FD',
  '#DADBFD',
  '#D4D4FD',
  '#CED6FD',
  '#C8C8FD',
  '#C1C1FD',
  '#BBC9FD',
  '#B5BCFD',
  '#ADB6FD',
  '#A6ACFD',
  '#9FA8FD',
  '#9999FD',
  '#9191FD',
  '#8888FD',
  '#7F7FFD',
  '#7777FD',
  '#6E6EF7',
  '#6666F7',
  '#5D5DFA',
  '#5454F4',
  '#4C4CED',
  '#4444E7',
  '#3B3BEB',
  '#3232E4',
  '#2929E1',
  '#1F1FE0',
  '#1616DD',
  '#0D0DDB',
  '#0404D3',
  '#0000CA',
  '#0000C1',
  '#0000B7',
  '#0000AA',
  '#0000A0',
  '#000096',
  '#00008C',
  '#000082',
  '#000078',
  '#00006E',
  '#000064',
  '#00005A',
  '#000050',
  '#000046',
  '#00003C',
  '#000032',
  '#000028',
  '#00001E',
  '#000014',
  '#00000A',
  'green',
  'red',
  'rgba(133,122,200)',
  '#f15025',
];

console.log(colors);

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

const getRandomNumber = () => {
  return Math.trunc(Math.random() * colors.length) + 1;
};

btn.addEventListener('click', function () {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});
