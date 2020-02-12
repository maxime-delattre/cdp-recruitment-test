const {addChildrenSizeInParentName} = require("./core");
const {filterAnimals} = require("./core");

test('it returns only countries having at least one person who have at least one animal with matching name', () => {
    // Given
    const data = [
        {
            name: 'France',
            people:
                [
                    {
                        name: 'Pierre Dupond',
                        animals:
                            [
                                {name: 'toto'}
                            ]
                    }
                ]
        },
        {
            name: 'Germany',
            people:
                [
                    {
                        name: 'Mark Muller',
                        animals:
                            [
                                {name: 'dodo'},
                            ]
                    }
                ]
        }];

    //When
    const result = filterAnimals(data, "tot");

    //Then
    const resultWanted = [
        {
            name: 'France',
            people:
                [
                    {
                        name: 'Pierre Dupond',
                        animals:
                            [
                                {name: 'toto'},
                            ]
                    }
                ]
        }];
    expect(result).toStrictEqual(resultWanted);
});

test('it returns countries with people who have at least one animal with matching name', () => {
    // Given
    const data = [
        {
            name: 'France',
            people:
                [
                    {
                        name: 'Pierre Dupond',
                        animals:
                            [
                                {name: 'toto'}
                            ]
                    },
                    {
                        name: 'Marie Degant',
                        animals:
                            [
                                {name: 'dodo'}
                            ]
                    }]
        }];

    // When
    const result = filterAnimals(data, "tot");

    //Then
    const resultWanted = [
        {
            name: 'France',
            people:
                [
                    {
                        name: 'Pierre Dupond',
                        animals:
                            [
                                {name: 'toto'}
                            ]
                    }]
        }];

    expect(result).toStrictEqual(resultWanted);
});

test('it returns countries with people with animals which have a matching name', () => {
    //Given
    const data = [
        {
            name: 'France',
            people:
                [
                    {
                        name: 'Pierre Dupond',
                        animals:
                            [
                                {name: 'toto'},
                                {name: 'didi'}
                            ]
                    }
                ]
        }];

    //When
    const result = filterAnimals(data, "tot");

    //Then
    const resultWanted = [
        {
            name: 'France',
            people:
                [
                    {
                        name: 'Pierre Dupond',
                        animals:
                            [
                                {name: 'toto'}
                            ]
                    }
                ]
        }];
    expect(result).toStrictEqual(resultWanted);
});

test('it returns size of children in parent name', () => {
    //Given
    const data = [
        {
            name: 'France',
            people:
                [
                    {
                        name: 'Pierre Dupond',
                        animals:
                            [
                                {name: 'toto'},
                                {name: 'didi'}
                            ]
                    }
                ]
        }];

    //When
    const result = addChildrenSizeInParentName(data);

    //Then
    const resultWaited = [
        {
            name: 'France [1]',
            people:
                [
                    {
                        name: 'Pierre Dupond [2]',
                        animals:
                            [
                                {name: 'toto'},
                                {name: 'didi'}
                            ]
                    }
                ]
        }];
    expect(result).toStrictEqual(resultWaited);
});
