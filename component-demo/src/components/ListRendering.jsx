import Employee from "./Employee";

export default function EmployeeList() {
  const employees = [
    {
      name: "John Doe",
      gender: "Male",
      country: "US",
      age: 23,
      id: 1,
    },
    {
      name: "John Willaim",
      gender: "Male",
      country: "US",
      age: 28,
      id: 2,
    },
    {
      name: "Flora Kite",
      gender: "Female",
      country: "US",
      age: 21,
      id: 3,
    },
  ];

  return (
    <>
      {/* <h2>{employees[0]}</h2>
        <h2>{employees[1]}</h2>
        <h2>{employees[2]}</h2>
        <h2>{employees[3]}</h2>
        <h2>{employees[4]}</h2> */}

      {employees.map((e) => (
      
       
            <Employee
          key={e.id}
          name={e.name}
          gender={e.gender}
          country={e.country}
          age={e.age}
        ></Employee>
       
     
      ))}
    </>
  );
}
