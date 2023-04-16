// Code your solution here
function findMatching(names, string) {
    return names.filter(name => name.toLowerCase() === string.toLowerCase());
}

function fuzzyMatch(names, string) {
    return names.filter(name => string === name.slice(0, string.length));
}

function matchName(drivers, string) {
    return drivers.filter(driverObject => driverObject.name === string);
}
