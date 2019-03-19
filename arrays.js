// ---------------------------
// The Arrays You Will Work With
// ---------------------------
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];


// ---------------------------
// 1. Find largest number
// ---------------------------

findLargestNum(numbers);

function findLargestNum(numArray) {
    var largestNum = numArray[0];
    for (var i = 1; i <= numArray.length; i++) {
        if (largestNum < numArray[i]) {
            largestNum = numArray[i];
        }
    }
    return largestNum;
}

// ---------------------------
// 2. Find longest string
// ---------------------------

findLongestStr(strings);

function findLongestStr(strArray) {
    var largestStr = strArray[0];
    for (var i = 1; i < strArray.length; i++) {
        if (strArray[i].length > largestStr.length) {
            largestStr = strArray[i];
        }
    }
    return largestStr;
}

// ---------------------------
// 3. Find even numbers
// ---------------------------

findEvenNums(numbers);

function findEvenNums(numArray) {
    var evenNumArray = [];
    for (var i = 0; i <= numArray.length; i++) {
        if (numArray[i]%2 === 0) {
            evenNumArray.push(numArray[i]);
        }
    }
    return evenNumArray;
}

// ---------------------------
// 4. Find odd numbers
// ---------------------------

findOddNums(numbers);

function findOddNums(numArray) {
    var oddNumArray = [];
    for (var i = 0; i <= numArray.length; i++) {
        if (numArray[i]%2 === 1) {
            oddNumArray.push(numArray[i]);
        }
    }
    return oddNumArray;
}

// ---------------------------
// 5. Find words that contain `is`
// ---------------------------

findContainedWord(strings, 'is');

function findContainedWord(strArray, substring) {
    var containedArray = [];
    for (var i = 0; i < strArray.length; i++) {
        if (strArray[i].includes(substring)) {
            containedArray.push(strArray[i]);
        }
    }
    return containedArray;
}

// ---------------------------
// 5. Join Both Arrays Together
// ---------------------------

joinArrays(numbers, strings);

function joinArrays(numArray, strArray) {
    var joinedArray = [];
    for (var i = 0; i < numArray.length; i++) {
        joinedArray.push(numArray[i]);
    }
    for (var i = 0; i < strArray.length; i++) {
        joinedArray.push(strArray[i]);
    }
    return joinedArray;
}

// ---------------------------
// 6. Use the Instructors array and find all that teach JavaScript, 
//    then sort them alphabetically
// ---------------------------

findAndSortObjArray(instructors);

function findAndSortObjArray(instArray) {
    var newArray = [];
    for (var i = 0; i < instArray.length; i++) {
        if (instArray[i].teaches === 'JavaScript') {
            newArray.push(instArray[i]);
        }
    }
    for (var k = 0; k < newArray.length; k++) {
        for (var i = 0; i < newArray.length-1; i++) {
            if (newArray[i].firstname.toLowerCase() > newArray[i+1].firstname.toLowerCase()) {
                tempValue = newArray[i];
                newArray[i] = newArray[i+1];
                newArray[i+1] = tempValue;
            }
        }
    }
}
