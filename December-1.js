const data = ['removed input'];

const initialValue = 0;

const totalCalories = data.map(elfArray => {
    const sumWithInitial = elfArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
);
return sumWithInitial
})

const mostCalories = Math.max(...totalCalories)

// console.log(mostCalories) //answer 1

totalCalories.sort(function(a, b) {
  return b - a;
});

const topThreeCalories = [];

for (let index = 0; index < 3; index++) {
    topThreeCalories.push(totalCalories[index])
}

const topThreeTotal = topThreeCalories.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );

  console.log(topThreeTotal); //answer 2
