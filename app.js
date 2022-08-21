function doubleValues(arr) {
    let newArr = [];
    arr.forEach(function (v) {
        newArr.push(v * 2)
    })
    return newArr
}

function onlyEvenValue(arr) {
    let newArr = [];
    arr.forEach(function (v) {
        if (v % 2 === 0) {
            newArr.push(v)
        }
    })
    return newArr
}

function showFirstAndLast(arr) {
    let newArr = [];
    arr.forEach(function (word) {
        newArr.push(word[0] + word[word.length - 1])
    })
    return newArr
}

function addKeyAndValue(arr, key, value) {
    arr.forEach(function (v) {
        v[key] = value;
    })
    return arr;
}

function vowelCount(str) {
    let newObj = {};
    let vowel = 'aeiou';
    let arr = str.split('');
    arr.forEach(function (word) {
        let lowerCaseWord = word.toLowerCase();
        if (vowel.indexOf(lowerCaseWord) !== -1) {
            if (newObj[lowerCaseWord]) {
                newObj[lowerCaseWord]++
            }
            else {
                newObj[lowerCaseWord] = 1;
            }
        }
    })
    return newObj;
}

function doubleValuesWithMap(arr) {
    return arr.map(function (value) {
        return value * 2;
    })
}

function valTimesIndex(arr) {
    return arr.map(function (value, idx) {
        return value * idx;
    })
}

function extractKey(arr, key) {
    return arr.map(function (v) {
        return v[key]
    })
}

function extractFullName(arr) {
    return arr.map(function (v) {
        return v.first + " " + v.last;
    })
}

function filterByValue(arr, key) {
    return arr.filter(function (value) {
        return value[key] !== undefined
    })
}

function find(arr, value) {
    return arr.filter(function (v) {
        return v === value;
    })
    [0]
}

function findInObj(arr, key, value) {
    return arr.filter(function (v) {
        return v[key] === value;
    })
    [0]
}

function removeVowels(str) {
    let vowel = 'aeiou'
    let splitArr = str.split('')
    return splitArr.filter(function (v) {
        let lowerCase = v.toLowerCase();
        return vowel.indexOf(lowerCase) === -1

    }).join('')
}

function doubleOddNumbers(arr) {
    return arr.filter(function (v) {
        return v % 2 !== 0;
    }).map(function (v) {
        return v * 2;
    })

}