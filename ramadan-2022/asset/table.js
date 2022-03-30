
var object = [
{
				"Ramadan": 1,
				"Days":"Sun",
				"Date": "12-03-12",
				"Sehar": "05:19 AM",
				"Iftar": "06:54 PM"
			},
			{
				"Ramadan": 2,
				"Days":"Mon",
				"Date": "12-03-12",
				"Sehar": "05:18 AM",
				"Iftar": "06:54 PM"
			},
			{
				"Ramadan": 3,
				"Days":"Tues",
				"Date": "12-03-12",
				"Sehar": "05:17 AM",
				"Iftar": "06:54 PM"
			},
			{
				"Ramadan": 4,
				"Days":"Wed",
				"Date": "12-03-12",
				"Sehar": "05:16 AM",
				"Iftar": "06:54 PM"
			},
			{
				"Ramadan": 5,
				"Days":"Thur",
				"Date": "12-03-12",
				"Sehar": "05:15 AM",
				"Iftar": "06:54 PM"
			},
			{
				"Ramadan": 6,
				"Days":"Fri",
				"Date": "12-03-12",
				"Sehar": "05:14 AM",
				"Iftar": "06:55 PM"
			},
			{
				"Ramadan": 7,
				"Days":"Sat",
				"Date": "12-03-12",
				"Sehar": "05:13 AM",
				"Iftar": "06:55 PM"
			},
			{
				"Ramadan": 8,
				"Days":"Sun",
				"Date": "12-03-12",
				"Sehar": "05:12 AM",
				"Iftar": "06:55 PM"
			},
			{
				"Ramadan": 9,
				"Days":"Mon",
				"Date": "12-03-12",
				"Sehar": "05:11 AM",
				"Iftar": "06:55 PM"
			},
			{
				"Ramadan": 10,
				"Days":"Tues",
				"Date": "12-03-12",
				"Sehar": "05:10 AM",
				"Iftar": "05:17 AM"
			},
			{
				"Ramadan": 11,
				"Days":"Wed",
				"Date": "12-03-12",
				"Sehar": "05:10 AM",
				"Iftar": "05:17 AM"
			},
			{
				"Ramadan": 12,
				"Days":"Thur",
				"Date": "12-03-12",
				"Sehar": "05:09 AM",
				"Iftar": "05:17 AM"
			},
			{

				"Ramadan": 13,
				"Days":"Fri",
				"Date": "12-03-12",
				"Sehar": "05:08 AM",
				"Iftar": "05:17 AM"
			},
			{
				"Ramadan": 14,
				"Days":"Sat",
				"Date": "12-03-12",
				"Sehar": "05:07 AM",
				"Iftar": "05:17 AM"
			},
			{
				"Ramadan": 15,
				"Days":"Sun",
				"Date": "12-03-12",
				"Sehar": "05:06 AM",
				"Iftar": "05:17 AM"
			},
			{
				"Ramadan": 16,
				"Days":"Mon",
				"Date": "12-03-12",
				"Sehar": "05:05 AM",
				"Iftar": "05:17 AM"
			},
			{
				"Ramadan": 17,
				"Days":"Tues",
				"Date": "12-03-12",
				"Sehar": "05:04 AM",
				"Iftar": "05:17 AM"
			},
			{
				"Ramadan": 18,
				"Days":"Wed",
				"Date": "12-03-12",
				"Sehar": "05:03 AM",
				"Iftar": "05:17 AM"
			},
			{
				"Ramadan": 19,
				"Days":"Thur",
				"Date": "12-03-12",
				"Sehar": "05:03 AM",
				"Iftar": "05:17 AM"
			},
			{
				"Ramadan": 20,
				"Days":"Fri",
				"Date": "12-03-12",
				"Sehar": "05:02 AM",
				"Iftar": "05:17 AM"
			},
			{
				"Ramadan": 21,
				"Days":"Sat",
				"Date": "12-03-12",
				"Sehar": "05:01 AM",
				"Iftar": "05:17 AM"
			},
			{
				"Ramadan": 22,
				"Days":"Sun",
				"Date": "12-03-12",
				"Sehar": "05:00 AM",
				"Iftar": "05:17 AM"
			},
			{
				"Ramadan": 23,
				"Days":"Mon",
				"Date": "12-03-12",
				"Sehar": "04:59 AM",
				"Iftar": "05:17 AM"
			},
			{
				"Ramadan": 24,
				"Days":"Tues",
				"Date": "12-03-12",
				"Sehar": "04:58 AM",
				"Iftar": "05:17 AM"
			},
			{
				"Ramadan": 25,
				"Days":"Wed",
				"Date": "12-03-12",
				"Sehar": "04:58 AM",
				"Iftar": "05:17 AM"
			},
			{
				"Ramadan": 26,
				"Days":"Thur",
				"Date": "12-03-12",
				"Sehar": "05:57 AM",
				"Iftar": "05:17 AM"
			},
			{
				"Ramadan": 27,
				"Days":"Fri",
				"Date": "12-03-12",
				"Sehar": "05:56 AM",
				"Iftar": "05:17 AM"
			},
			{
				"Ramadan": 28,
				"Days":"Sat",
				"Date": "12-03-12",
				"Sehar": "05:55 AM",
				"Iftar": "05:17 AM"
			},
			{
				"Ramadan": 29,
				"Days":"Sun",
				"Date": "12-03-12",
				"Sehar": "05:54 AM",
				"Iftar": "05:17 AM"
			},
			{
				"Ramadan": 30,
				"Days":"Mon",
				"Date": "12-03-12",
				"Sehar": "05:54 AM",
				"Iftar": "05:17 AM"
			}
];

function createTable(){
	$('#content').append('<table id="jsonTable" class="inner_table"><thead class="wraps"><tr></tr></thead><tbody></tbody></table>');
	
  $.each(Object.keys(object[0]), function(index, key){
    $('#jsonTable thead tr').append('<th>' + key + '</th>');
  });	
  $.each(object, function(index, jsonObject){     
    if(Object.keys(jsonObject).length > 0){
      var tableRow = '<tr>';
      $.each(Object.keys(jsonObject), function(i, key){
         tableRow += '<td>' + jsonObject[key] + '</td>';
      });
      tableRow += "</tr>";
      $('#jsonTable tbody').append(tableRow);
    }
	});
}

$(document).ready(function(){
  createTable();
});