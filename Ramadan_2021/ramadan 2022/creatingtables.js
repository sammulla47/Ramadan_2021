window.onload = function()
{
//    createTable1();

//  	createTable2();

     createTable3();
}

function createTable3()
{
    const elements = Elements.GetElements();
    const headings = Elements.GetHeadings();
    const properties = Elements.GetProperties();

    // create a table
    const table = document.createElement("table");

    // add a caption
//    table.createCaption().textContent = "Elements";

    // insert a row and add headings to it
    const hrow = table.insertRow();
    for(let heading of headings)
    {
        hrow.insertCell(-1).outerHTML = `<th>${heading}</th>`;
    }

	
			const table1 = document.createElement("table");
	
    // iterate data, adding rows and cells for each element
    for(let element of elements)
    {
        const drow = table1.insertRow(-1);

        for(let property of properties)
        {
            drow.insertCell(-1).innerHTML = element[property];
            // OR
            // drow.insertCell(-1).appendChild(document.createTextNode(element[property]));
        }
    }

    // add table to div
    document.getElementById("tablediv").appendChild(table);
					document.getElementById("tabledata").appendChild(table1);
	
		
}
