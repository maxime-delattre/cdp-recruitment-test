const {addChildrenSizeInParentName} = require("./core");
const {filterAnimals} = require("./core");
const {data} = require("./data");

const filterValue = getFilterValue();
const dataFiltered = filterAnimals(data, filterValue);
const dataFilteredEnhanced = addChildrenSizeInParentName(dataFiltered);

console.log(JSON.stringify(dataFilteredEnhanced, null, 2));

function getFilterValue() {
    const filterArg = process.argv.filter(arg => arg.includes("--filter="))[0];
    return filterArg ? filterArg.replace("--filter=", "") : "";
}
