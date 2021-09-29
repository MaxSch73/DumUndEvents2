let generateBttn = document.querySelector('button').addEventListener('click', (e) => {
  //tbody-Variable
  let tbody = document.querySelector('tbody');

  //tbody-leeren nach jedem generate
  tbody.innerHTML = '';

  //Input einlesen
  let inputzahl = document.querySelector('#i').value;

  //Tabellen-Reihe
  for (let indexA = 0; indexA < inputzahl; indexA++) {
    //Erstellen der Tabellen-Reihe
    let tr = document.createElement('tr');
    //Clickevent der Tabellenreihe
    tr.addEventListener('click', (e) => {
      console.log('Row clicked');
      tr.classList.toggle("selected")
    });

    //Tabellen-Inhalt
    for (let indexI = 0; indexI < 3; indexI++) {
      //Inhalt eines RowItems hinzufügen
      let tdIitem = document.createElement('td');
      tdIitem.innerText = indexA + indexI;

      //Der Tabellenreihe hinzufügen
      tr.appendChild(tdIitem);
    }

    //Tabellenreihe hinzufügen
    tbody.appendChild(tr);
  }
});