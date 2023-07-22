
var n = 4
var state = [0, 0, 0, 0]
var curlevel=1;
var k = 1;
var size = 0;

for(let i=size; i<n; i++){
    addskewer();
}

var boxes = document.querySelectorAll('.arrow');
boxes.forEach((box, index) => {
    box.addEventListener('click', () => putar(index, box));
});

function cek(){
    let i = 0;
    
    while(i<n){
        if(state[i] === 0){
            return 0;
        }
        i++;
    }
    return 1
}

function putar(index, box){
    console.log(`Box with index ${index} is clicked.`);
    if(state[index] === 0){
      box.style.animation = 'mymove 1s forwards'; state[index] = 1;
    } else if (state[index] === 1) {
      box.style.animation = 'back 1s forwards'; state[index] = 0;
    }
    for(let i = index+1; i < (index + k); i++){
      if(i>=n)break;
      if(state[i] === 0) {
          boxes[i].style.animation = 'mymove 1s forwards'; state[i] = 1;
      }
      else if(state[i]===1) { 
          boxes[i].style.animation = 'back 1s forwards'; state[i] = 0;
      }
    }
    for(let j = index-1; j > (index - k); j--){ 
      if(j<0)break;
      if(state[j] === 0) {
          boxes[j].style.animation = 'mymove 1s forwards'; state[j] = 1;
      }
      else if(state[j]===1) { 
          boxes[j].style.animation = 'back 1s forwards'; state[j] = 0;
      }
    }
    if(cek() === 1){
      boxes.forEach((b, id) => {
          b.style.borderBottom = '100px solid yellow';
      });
      const bod = document.querySelectorAll('body');
      bod[0].style.background = 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)';
      bod[0].style.backgroundSize = '400% 600%';
      bod[0].style.animation = 'gradient 10s ease infinite';
      bod[0].style.height = '100vh';
      const w = document.querySelectorAll('#win');
      w[0].style.display = 'block';
    }
}

function addskewer(){
    const row = document.getElementById('container');
    const newDiv = document.createElement('div');
    newDiv.classList.add('arrow');
    row.appendChild(newDiv);
}

function nextlvl () {

    bod = document.querySelectorAll("body");
    bod[0].style.background = 'white';
    const w = document.querySelectorAll('#win');
    w[0].style.display = 'none';
    boxes.forEach((box, index) => {
        box.style.borderBottom = '100px solid black';
        box.style.animation = 'back 1s forwards'; state[index] = 0;
    });

    addskewer();
    let bb = document.querySelectorAll('.arrow');
    let y = n;
    bb[y].addEventListener('click', () => putar(y, bb[y]));
    // bb = null;
    state[n] = 0;
    n += 1;

    boxes = null;
    boxes = document.querySelectorAll('.arrow');
    
    curlevel += 1;
    if(curlevel%2 === 0){
        k += 1;
    }

    l = document.getElementById('level');
    l.textContent = "Level "+curlevel;
}

function reset(){
    bod = document.querySelectorAll("body");
    bod[0].style.background = 'white';
    const w = document.querySelectorAll('#win');
    w[0].style.display = 'none';
    boxes.forEach((box, index) => {
        box.style.borderBottom = '100px solid black';
        box.style.animation = 'back 1s forwards'; state[index] = 0;
    });
}


