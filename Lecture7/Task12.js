class Company {
    departments;
    #errorMessage="Invalid input!";

    constructor(){
        this.departments = new Map();
    }

    addEmployee(name, salary, position, department){
        if(name==="" || name === null || name===undefined){
            throw new Error(this.#errorMessage);
        }
        if(salary===""||salary===null||salary===undefined||salary<0){
            throw new Error(this.#errorMessage);
        }
        if(position===""||position===null||position===undefined){
            throw new Error(this.#errorMessage);
        }
        if(department===""||department===null||department===undefined){
            throw new Error(this.#errorMessage);
        }

        if(!this.departments.has(department)){
            this.departments.set(department,[]);
        }

        this.departments.get(department).push(new Employee(name,position,salary)); 
        console.log(`New employee is hired. Name: ${name}. Position: ${position}`)       
    }

    bestDepartment(){
        let averageSalary=0;
        let bestDep=[];
        this.departments.forEach(department=>{
            let currAvSum=0;
            department.forEach(employee => {
                currAvSum+=employee.salary;
            });

            let employeeCount=department.length;
            currAvSum/=employeeCount;

            if(currAvSum>averageSalary){
                averageSalary=currAvSum;
                bestDep[0]=[...this.departments].find((value)=>value[1]===department)[0];
                bestDep[1]=department.sort((a,b)=>b.salary-a.salary||a.name-b.name);
            }
        })

        return averageSalary;
    }
}

class Employee{
    name;
    position;
    salary;

    constructor(name,position,salary){
        this.name=name,
        this.position=position,
        this.salary=salary
    }
}

let c = new Company();
c.addEmployee("Stamat", 2000, "engineer", "Construction");
c.addEmployee("Peter", 1500, "electrical engineer", "Construction");
c.addEmployee("Martin", 500, "cleaner", "Construction");
c.addEmployee("Stanley", 2000, "architect", "Construction");
c.addEmployee("Stamat", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Peter", 1000, "graphical designer", "Marketing");
c.addEmployee("George", 1350, "HR", "Human resources");
console.log(c.bestDepartment());