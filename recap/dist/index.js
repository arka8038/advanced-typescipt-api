"use strict";
function calculateSumOfAges(user1, user2) {
    return user1.age + user2.age;
}
const sum = calculateSumOfAges({ name: "A", age: 20 }, { name: "B", age: 30 });
console.log(sum);
