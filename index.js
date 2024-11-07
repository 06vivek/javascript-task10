const Employee = require('./task10.2')

const emp1 =new Employee("daniel",16,20000)
const emp2 =new Employee("jack",26,120000)
const emp3 =new Employee("tom",6,20000)
const emp4 =new Employee("sammy",36,11200)
const emp5 =new Employee("karan",66,660000)
const emp = [emp1,emp2,emp3,emp4,emp5]

console.log(Employee.sortbysalary(emp,"age"))
const exampleEmployee = new Employee();
console.log(exampleEmployee.filterbyage(emp,35))