// addDataRows retreives data and populates a table of data
async function addDataRows() {
  try {
    const dataService = new DataService();
    const data = await dataService.fetchData();

    data.forEach((element) => {
      createRow("rows", element);
    });
  } catch (e) {
    console.log(e);
    console.log("An error occured!!");
  }
}

// createRow will create a row in table with id parentElem and with data rowData
function createRow(parentElem, rowData) {
  const table = document.getElementById(parentElem);
  const row = table.insertRow(0);
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  const cell3 = row.insertCell(2);
  const cell4 = row.insertCell(3);
  const cell5 = row.insertCell(4);
  const cell6 = row.insertCell(5);

  cell1.innerHTML = rowData["name"].first;
  cell2.innerHTML = rowData["gender"];
  cell3.innerHTML = rowData["location"].city;
  cell4.innerHTML = rowData["dob"].age;
  cell5.innerHTML = rowData["cell"];

  const img = document.createElement("img");
  img.src = rowData["picture"].thumbnail;
  cell6.appendChild(img);

  //console.log(rowData[0]);
  // appendChild();
}
