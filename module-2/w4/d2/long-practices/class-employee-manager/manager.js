// manager.js
const Employee = require('./employee'); // 确保这个路径正确

class Manager extends Employee {
    constructor(name, salary, title) {
        super(name, salary, title);
        this.employees = [];
    }

    addEmployee(employee) {
        if (employee instanceof Employee) {
            this.employees.push(employee);
        } else {
            throw new Error('Only instances of Employee can be added.');
        }
    }

    calculateBonus(multiplier) {
        const totalSalary = this.salary + this._totalSubSalary();
        return totalSalary * multiplier;
    }

    _totalSubSalary() {
        let total = 0;
        for (let employee of this.employees) {
            total += employee.salary;
            if (employee instanceof Manager) {
                total += employee._totalSubSalary();
            }
        }
        return total;
    }
}

module.exports = Manager;






