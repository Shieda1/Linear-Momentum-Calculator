// https://calculator.swiftutors.com/linear-momentum-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const linearMomentumRadio = document.getElementById('linearMomentumRadio');
const massRadio = document.getElementById('massRadio');
const velocityRadio = document.getElementById('velocityRadio');

let linearMomentum;
let mass = v1;
let velocity = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

linearMomentumRadio.addEventListener('click', function() {
  variable1.textContent = 'Mass';
  variable2.textContent = 'Velocity';
  mass = v1;
  velocity = v2;
  result.textContent = '';
});

massRadio.addEventListener('click', function() {
  variable1.textContent = 'Linear Momentum';
  variable2.textContent = 'Velocity';
  linearMomentum = v1;
  velocity = v2;
  result.textContent = '';
});

velocityRadio.addEventListener('click', function() {
  variable1.textContent = 'Linear Momentum';
  variable2.textContent = 'Mass';
  linearMomentum = v1;
  mass = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(linearMomentumRadio.checked)
    result.textContent = `Linear Momentum = ${computeLinearMomentum().toFixed(2)}`;

  else if(massRadio.checked)
    result.textContent = `Mass = ${computeMass().toFixed(2)}`;

  else if(velocityRadio.checked)
    result.textContent = `Velocity = ${computeVelocity().toFixed(2)}`;
})

// calculation

function computeLinearMomentum() {
  return Number(mass.value) * Number(velocity.value);
}

function computeMass() {
  return Number(linearMomentum.value) / Number(velocity.value);
}

function computeVelocity() {
  return Number(linearMomentum.value) / Number(mass.value);
}