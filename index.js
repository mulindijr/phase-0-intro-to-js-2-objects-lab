// Write your solution in this file!

const employee = {
    name:"Sam",
    streetAddress:"Kangemi",
}

function updateEmployeeWithKeyAndValue(obj, key, value){
    const newEmployee = { ...employee};
    newEmployee[key] = value;
    return  newEmployee
}

const newEmployee = updateEmployeeWithKeyAndValue(
    employee,
    'streetAddress',
    '11 Broadway'
);

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  const updatedEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '12 Broadway');
  updatedEmployee;

  function deleteFromEmployeeByKey(employee, key) {
    const cloneEmployee = { ...employee };
    delete cloneEmployee[key];
    return cloneEmployee;
  }
  const cloneEmployee = deleteFromEmployeeByKey(employee, 'name');

  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  

  