class Person {
    public name: String;
    public age: Number;

    public constructor(name: String, age: Number) {
        this.name = name
        this.age = age
    }
}
const lucas = new Person("Lucas", 31)
console.log(lucas.age)