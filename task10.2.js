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
 module.exports = Employee;