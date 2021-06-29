// Import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select('tbody');

// Function to put data in table
function buildTable(data) {
    // Clear out existing data
    tbody.html('');
    //Loop through each object and append row and cells
    data.forEach((dataRow) => {
        // Append row to table
        let row = tbody.append('tr');
        // Loop through and add values to cell
        Object.values(dataRow).forEach((val) => {
            let cell = row.append('td');
            cell.text(val);
        });
    });
};

// Function to filter data
function handleClick() {
    // Grab datetime value from filter
    let date = d3.select('#datetime').property('value');
    let filteredData = tableData;
    // If date is entered, apply filter to data
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    // Rebuild table using filtered data
    buildTable(filteredData);
};

// Listen for the filter button click
d3.selectAll('#filter-btn').on('click', handleClick);

// Build default table on load
buildTable(tableData);