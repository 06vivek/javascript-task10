//Add a js class called Employee and create methods in it to sort
// employees by different paramters and to filter by age.

class Employee {
  constructor(name,age,salary)
{
    this.name =name;
    this.age=age
    this.salary =salary;
}
  static sortbysalary(emp,salary){
    return emp.sort((a,b)=>{
        if(a[salary] < b[salary]) return -1;
    })
 } 
  filterbyage(emp,givenage){
    return emp.filter((element)=> element.age>=givenage)
  }
}
const emp1 =new Employee("daniel",16,20000)
const emp2 =new Employee("jack",26,120000)
const emp3 =new Employee("tom",6,20000)
const emp4 =new Employee("sammy",36,11200)
const emp5 =new Employee("karan",66,660000)
const emp = [emp1,emp2,emp3,emp4,emp5]

console.log(Employee.sortbysalary(emp,"age"))
const exampleEmployee = new Employee();
console.log(exampleEmployee.filterbyage(emp,35))

 // 1) static method use krte time direct   class to use krte hai uska koi obect nahi bante
 // 2) withoout static method we have to create object of that class to use the method
      //   without static me hum ko comment vala section use krna hai  or method  
      //   method ke samne se static hatna hai..