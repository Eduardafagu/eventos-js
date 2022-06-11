const box1 = document.getElementById('box-1');
box1.onclick = function () {
  box1.classList.toggle('red');
  box1.classList.toggle('blue');
};




const box2 = document.getElementById('box-2')
box2.ondblclick= function () {
  box2.classList.toggle('rounded')
}


const box3 = document.getElementById('box-3');

box3.onmouseenter= function () {
  box3.classList.add('width-x2');
};

box3.onmouseleave = function () {
  box3.classList.remove('width-x2');
};



const box4 = document.getElementById('box-4');
box4.onmousedown= function () {
  box4.classList.add('skew');
};

box4.onmouseup-function () {
  box4.classList.remove('skew');
};


const boxR1 = document.getElementById('box-r1')
boxR1.onclick = function () {
  const corAtual = boxR1.style.background
  if (corAtual ==='blue') {
    boxR1.style.background= 'red'
  } else {
    boxR1.style.background = 'blue'
  }
}

const boxR2 = document.getElementById('box-r2')
boxR2.ondblclick= function() {
  const borderRadius =window.getComputedStyle(boxR2).borderRadius;
  if (borderRadius === '50%') {
    boxR2.style.borderRadius = '0';
  } else {
    boxR2.style.borderRadius = '50%';
  }
};

const boxr3 = document.getElementById('box-r4');
boxr3.onmousedown = function () {
  boxr3.style.width = '10rem'
  };

  boxr3.onmouseleave=function () {
    boxr3.style.width = '5rem'
  };

    const boxr4 = document.getElementById('box-r4');
  boxr4.onmousedown=function () {
    boxr4.style.transform = 'skewX(10deg)'
};

boxr4.onmouseup = function () {
  boxr4.style.transform= 'skewX(0)'
};

