for (let index = 0; index < people.length; index++) {
  let div = document.createElement('div');
  div.innerText = `Name: ${people[index].name} \n Augenfarbe: ${people[index].eyeColor}`;
  document.body.appendChild(div);
  div.addEventListener('click', function () {
    document.body.removeChild(div);
  });
}

document.body.classList.add('flex-container');
