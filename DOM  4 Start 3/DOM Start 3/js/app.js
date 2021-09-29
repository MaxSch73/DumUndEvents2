const input = document.querySelector('input');
const bttnGen = document.querySelector('button');
const tbody = document.querySelectorAll('tbody');

bttnGen.addEventListener('click', genList);

function genList() {
  for (let index = 0; index < input.value; index++) {
    let tr = document.createElement('tr');
    tbody.appendChild(tr);

    // let td = document.createElement('td');
    // tr.appendChild(td);
    // td.innerText = index;
  }
}
