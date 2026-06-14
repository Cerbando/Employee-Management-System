// Step 2: Employee class
class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    describe() {
        return `${this.name} works in the ${this.department} department.`;
    }
}

// Step 3: Manager class extends Employee
class Manager extends Employee {
    constructor(name, department, teamSize) {
        super(name, department);
        this.teamSize = teamSize;
    }

    describe() {
        return `${super.describe()} They manage a team of ${this.teamSize} employees.`;
    }
}

// Step 4: Create sample employees and managers
const employee1 = new Employee("Jackie Robbins", "Marketing");
const employee2 = new Employee("Tyler Norman", "Finance");

const manager1 = new Manager("Sarah Baker", "IT");
const manager2 = new Manager("Jason Brown", "Sales");

