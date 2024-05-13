
interface User {
    name: string,
    age: number
}

function calculateSumOfAges(user1: User, user2: User) {
    return user1.age + user2.age
}

const sum = calculateSumOfAges({name:"A", age:20}, {name:"B", age:30})
console.log(sum)