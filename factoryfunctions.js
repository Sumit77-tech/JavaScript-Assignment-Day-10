function createEmployee(name, role, salary) {
    return {
        name: name,
        role: role,
        salary: salary,
        introduce() {
            console.log(`Hello, I am ${this.name}, working as a ${this.role}`);
        }
    };
}
const employee1 = createEmployee("Alice", "Software Engineer", 70000);
const employee2 = createEmployee("Bob", "Product Manager", 85000);
employee1.introduce();
employee2.introduce();