const departments = [
  { id: 3, name: "Node" },
  { id: 1, name: "React" },
  { id: 2, name: "DotNet" },
  ];
  
  let employees = [
    {
      id: 1,
      name: "Barney Stinson",
      designation: "Manager",
      departmentId: 2
    },
    {
      id: 2,
      name: "Ross Geller",
      designation: "Developer",
      departmentId: 1
    },
    {
      id: 3,
      name: "Michael Scott",
      designation: "Developer",
      departmentId: 2
    },
    {
      id: 4,
      name: "Ted Mosby",
      designation: "Developer",
      departmentId: 1
    },
    {
      id: 5,
      name: "Chandler Bing",
      designation: "Manager",
      departmentId: 3
    },
    {
      id: 6,
      name: "Rachel Green",
      designation: "Manager",
      departmentId: 1
    },
    {
      id: 7,
      name: "Lily Aldrin",
      designation: "Developer",
      departmentId: 1
    }
  ];
  
  /* 
  Output:
  {
    React: {
      id: 2, 
      name: 'Ross Geller',
      designation: 'Developer',
      departmentId: 1,
    },
    DotNet: {
      id: 3, 
      name: 'Michael Scott',
      designation: 'Developer',
      departmentId: 2,
    },
  }
  */

let res = employees.reduce(function(acc,elem){
  if(elem.designation == "Developer")
  {
    let dept = departments.find( elem2 => elem2.id == elem.departmentId ).name;
    if(!acc.has(dept))
    {
      acc.set(dept,elem);
    }
  }
  return acc;
}, new Map());

console.log(Object.fromEntries(res));