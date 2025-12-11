function createTable() {
const rowInput = prompt("Input number of rows");
	const colInput = prompt("Input number of columns");
	const rn = parseInt(rowInput, 10);
    const cn = parseInt(colInput, 10);
	if (isNaN(rn) || isNaN(cn)) {
		return;
    }
	if (rn <= 0 || cn <= 0) {

        alert("Number of rows and columns must be a positive integer.");
        return;
    }
	const table = document.getElementById("myTable");
	table.innerHTML = "";
	for (let i = 0; i < rn; i++) {
        const newRow = table.insertRow();
        for (let j = 0; j < cn; j++) {

            const newCell = newRow.insertCell();
            newCell.textContent = `Row-${i} Column-${j}`;
        }
    }
  
}
