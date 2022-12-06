const data = ['removed input'];

const expandedData = data.map((pairs) => {

    const divideStrings = pairs.map((string) => {
        return string.split("-");
    })
    const divideNumbers = divideStrings.map((stringPair) => {
        const stringToNumber = stringPair.map((string) => {
            return Number(string)
        })
        return stringToNumber
    });

    const numberSet0 = Array.from(new Array((divideNumbers[0][1] + 1) - divideNumbers[0][0]), (x, i) => i + divideNumbers[0][0]);
    const numberSet1 = Array.from(new Array((divideNumbers[1][1] + 1) - divideNumbers[1][0]), (x, i) => i + divideNumbers[1][0]);

    return [numberSet0, numberSet1]

});

const redundantPairs = expandedData.map((dataPair) => {

    const containsAllZero = dataPair[0].every((integer) => {
        return dataPair[1].includes(integer)
    })

      const containsAllOne = dataPair[1].every((integer) => {
        return dataPair[0].includes(integer)
    })
      if (containsAllZero || containsAllOne){
        return dataPair
      }
})


const filteredPairs = redundantPairs.filter(function(x) {
    return x !== undefined;
});

// console.log(filteredPairs.length) //returns where completely overlaps

// PART TWO - partial overlap now counts
const overlappingPairs = expandedData.map((dataPair) => {

    const containsAllZero = dataPair[0].some((integer) => {
        return dataPair[1].includes(integer)
    })

    const containsAllOne = dataPair[1].some((integer) => {
        return dataPair[0].includes(integer)
    })

      if (containsAllZero || containsAllOne){
        return dataPair
      }
})

const confirmAllDefined = overlappingPairs.filter(function(x) {
    return x !== undefined;
}); //should refactor into reusable function since used twice (sorry friends)

console.log(confirmAllDefined.length)
