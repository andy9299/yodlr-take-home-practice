async function getUsers() {
  const res = await fetch("/users");
  return res.json();
}

// "camelCase" -> "Camel Case"
function camelCaseToTitle(str) {

}

function renderTable(users) {
  // Create Table and Header Row
  const table = document.createElement("table");
  const tHead = document.createElement("thead");
  const tBody = document.createElement("tbody");
  const tHeadRow = document.createElement("tr");
  const fields = [];

  // Header Row
  for (const field in users[0]) {
    fields.push(field);
    const th = document.createElement("th");
    th.scope = "col";
    th.innerText = field[0].toUpperCase() + field.slice(1).replace(/([A-Z])/g, " $&");
    tHeadRow.appendChild(th);
  }
  table.appendChild(tHeadRow);

  // Table Body
  for (const user of users) {
    const tr = document.createElement("tr");
    for (const field of fields) {
      const td = document.createElement("td");
      td.innerText = user[field];
      tr.appendChild(td);
    }
    tBody.appendChild(tr);
  }

  table.appendChild(tBody);

  table.className = "table table-striped";
  return table;
}


const main = document.getElementsByTagName("main")[0];

getUsers().then((users) => {
  console.log(users);
  main.innerHTML = "";
  main.appendChild(renderTable(users));
});