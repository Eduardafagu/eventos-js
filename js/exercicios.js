const box1 = document.getElementById('box-1');
box1.onclick = function () {
  box1.classList.toggle('exercicio-1');
};
const box2 = document.getElementById('box-2')
box2.ondblclick= function () {
  box2.classList.toggle('exercicio-2');
};

const box3 = document.getElementById('box-3');

box3.onmouseenter= function () {
  box3.style.background = 'mediumsegreen'
  box3.style.borderRadius = '50%'
};

box3.ondragleave = function () {
  box3.style.background = 'crimson'
  box3.style.borderRadius = '0'
};

const box4 = document.getElementById('box-4');
box4.onclick = function () {
  box4.classList.toggle ('exercicio-4');
};

let rem = 5
box4.ondblclick = function () {
  rem += 1;
  box4.style.width = `${rem}rem`
};


