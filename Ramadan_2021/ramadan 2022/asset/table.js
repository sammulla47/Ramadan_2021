	
	function createTable2()
{
    const elements = Elements.GetElements();
    const headings = Elements.GetHeadings();
    const properties = Elements.GetProperties();

    // create table
    const table = document.createElement("table");

    // create caption and add to table
//    const caption = document.createElement("caption");
    const captiontext = document.createTextNode("Elements");
    caption.appendChild(captiontext);
//    table.appendChild(caption);

    // create row for headings...
    const hrow = document.createElement("tr");
    table.appendChild(hrow);

    // ...and add cells to it
    for(let heading of headings)
    {
        const th = document.createElement("th");
        const thtext = document.createTextNode(heading);
        th.appendChild(thtext);
        hrow.appendChild(th);
    }

    // iterate data, adding rows and cells for each item
    for(let element of elements)
    {
        const drow = document.createElement("tr");
        table.appendChild(drow);

        for(let property of properties)
        {
            const td = document.createElement("td");
            const tdtext = document.createTextNode(element[property]);
            td.appendChild(tdtext);
            drow.appendChild(td);
        }
    }

    // add table to div
    document.getElementById("tablediv").appendChild(table);
}