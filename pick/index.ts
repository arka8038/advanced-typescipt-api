interface User {
    name: string
    age: number
    email: string
    password: string
}

type  UserPrototype = Pick<User, "age" | "email"> //picks the selective fields from the interface or type and creates another type

function display(user: UserPrototype) {
    console.log(`Name: ${user.age} and Email: ${user.email}`)
}

display({age:20,  email: 'abc@gmail.com'})