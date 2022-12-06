// data removed

const miniData1 = "mjqjpqmgbljsphdztnvjfqwrcgsmlb";
const miniData2 = "bvwbjplbgvbhsrlpgdmjqwftvncz";
const miniData3 = "nppdvjthqldpwncqszvftbrmjlhg";
const miniData4 = "nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg";
const miniData5 = "zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw";


// looking for four unique characters in a row
// return index + 1 as solution (.length?)
console.log({miniData1})
let uniqueletters;

for (let i = 0; i < data.length; i++) {
    const j = i +1;
    const k = i + 2;
    const l = i + 3;

    if ((data[i] !== data[j]) && (data[i] !== data[k]) && (data[i] !== data[l]) && (data[j] !== data[k]) && (data[j] !== data[l]) && (data[k] !== data[l])) {
        console.log("in the if statement")
        console.log(`${data[i]}${data[j]}${data[k]}${data[l]}`)
        uniqueletters = `${data[i]}${data[j]}${data[k]}${data[l]}`
        console.log(l + 1) // answer
        return uniqueletters
        }
}

console.log(uniqueletters)
