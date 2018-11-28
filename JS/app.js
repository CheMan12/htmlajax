//Obtener la Referencia al elemento
var btnActualizar = document.getElementById("btnActualizar");

//Agregar un event listener para cada click
btnActualizar.addEventListener('click', actualizar);

function actualizar()
{
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function ()
  {
    if(this.readyState == 4 && this.status == 200)
    {
      var response = JSON.parse(this.responseText);
      if (response.status == "ok")
      {
        document.getElementsByTagName('tbody')[0].innerHTML = "";
        response.students.forEach(function(student)
      {
        var row = document.createElement("tr");
        var idCell = document.createElement("td");
        var firstNameCell = document.createElement("td");
        var lastNameCell = document.createElement("td");

        var idText = document.createTextNode (student.id);
        var firstNameText = document.createTextNode (student.first_name);
        var lastNameText = document.createTextNode (student.last_name);

        idCell.appendChild (idText);
        firstNameCell.appendChild(firstNameText);
        lastNameCell.appendChild(lastNameText);

        row.appendChild(idCell);
        row.appendChild(firstNameCell);
        row.appendChild(lastNameCell);

        document.getElementsByTagName('tbody')[0].appendChild(row);
      });
    }
  }
};
  xhttp.open("GET", "http://nyc.pixan.io/ajax/public/api/students", true);
  xhttp.send();
}
