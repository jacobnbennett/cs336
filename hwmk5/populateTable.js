function addDataRows() {
  const list = new DataService();

  list.data = [
    {
      name: "oldSnake",
      gender: "M",
      address: "MK2",
      age: 40,
      phoneNumber: null,
    },
    {
      name: "Otacon",
      gender: "M",
      address: "MK2",
      age: 45,
      phoneNumber: "+1 616 264 2938",
    },
    {
      name: "Sunny",
      gender: "F",
      address: "MK2",
      age: 12,
      phoneNumber: null,
    },
  ];
  console.log(list.getData());
  list.data.forEach((element) => {
    createRow("rows", element);
  });
}

function createRow(parentElem, rowData) {
  const table = document.getElementById(parentElem);
  const row = table.insertRow(0);
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  const cell3 = row.insertCell(2);
  const cell4 = row.insertCell(3);
  const cell5 = row.insertCell(4);

  cell1.innerHTML = rowData["name"];
  cell2.innerHTML = rowData["gender"];
  cell3.innerHTML = rowData["address"];
  cell4.innerHTML = rowData["age"];
  cell5.innerHTML = rowData["phoneNumber"];

  console.log(rowData[0]);
  // appendChild();
}
