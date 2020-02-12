function filterAnimals(data, animalFilter) {
    return data
        .filter(country => hasPeopleWithAnimalWithMatchingName(country, animalFilter))
        .map(country => getCountryWithPeopleWithAnimalsWithMatchingName(country, animalFilter));
}

function hasPeopleWithAnimalWithMatchingName(country, animalFilter) {
    return country.people.some(person => hasAnimalWithMatchingName(person, animalFilter));
}

function hasAnimalWithMatchingName(person, animalFilter) {
    return person.animals.some(animal => hasMatchingName(animal, animalFilter));
}

function hasMatchingName(animal, animalFilter) {
    return animal.name.includes(animalFilter);
}

function getCountryWithPeopleWithAnimalsWithMatchingName(country, animalFilter) {
    return {
        ...country,
        people: getPeopleWithAnimalsWithMatchingName(country, animalFilter)
    };
}

function getPeopleWithAnimalsWithMatchingName(country, animalFilter) {
    return country.people
        .filter(person => hasAnimalWithMatchingName(person, animalFilter))
        .map(person => getPersonWithAnimalsWithMatchingName(person, animalFilter));
}

function getPersonWithAnimalsWithMatchingName(person, animalFilter) {
    return {
        ...person,
        animals: getAnimalsWithMatchingName(person, animalFilter)
    };
}

function getAnimalsWithMatchingName(person, animalFilter) {
    return person.animals.filter(animal => hasMatchingName(animal, animalFilter));
}

function addChildrenSizeInParentName(data) {
    return data.map(country => ({
        name: getNameFormattedWithChildrenSize(country.name, country.people.length),
        people: addAnimalsSize(country.people)
    }));
}

function addAnimalsSize(people) {
    return people.map(person => ({
        ...person,
        name: getNameFormattedWithChildrenSize(person.name, person.animals.length)
    }));
}

function getNameFormattedWithChildrenSize(name, childrenSize) {
    return name + " [" + childrenSize + "]";
}

module.exports = {
    filterAnimals,
    addChildrenSizeInParentName
};
