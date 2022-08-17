 let dataTable =  document.getElementById("dataTable");
 
 for (let i = 0; i < Program.length;i++) {
 let row  = document.createElement("tr"); 
 let programType = document.createElement("td"); 
 let cost = document.createElement("td"); 
 let deadline = document.createElement("td"); 
 let link = document.createElement("td"); 
 programType.innerHTML = Program[i].ProgramType;
 cost.innerHTML = Program[i].Cost;
 deadline.innerHTML = Program[i].Deadline;
let linka = document.createElement("a")
linka.innerHTML = Program[i].Link;
linka.href = Program[i].Link;
row.append(programType);
row.append(cost);
row.append(deadline);
row.append(link);
link.append(linka);
dataTable.append(row);

 }
 