export const mockDataEmployee = {
  "employees": [
    {
      "id": 1,
      "firstName": "John",
      "lastName": "Doe",
      "dateOfBirth": new Date("1985-05-15"),
      "gender": "Male",
      "typeCard": "DNI",
      "idCard": "12345678",
      "city": "New York",
      "address": "123 Main St",
      "maritalStatus": "Married",
      "phoneNumber": "555-1234",
      "education": {
        "id": 1,
        "level": "University",
        "title": "BSc Computer Science",
        "endDate": new Date("2007-06-01"),
        "nameInstitution": "MIT"
      },
      "companyId": 101,
      "contact": {
        "id": 1,
        "name": "Jane Doe",
        "phone": "555-5678",
        "relationship": "Spouse"
      },
      "contract": [
        {
          "id": 1,
          "contractType": {
            "id": 1,
            "type": "Permanent"
          },
          "startDate": new Date("2008-08-01"),
          "endDate": new Date("2023-08-01"),
          "duration": "15 years",
          "position": "Senior Developer",
          "baseSalary": 80000,
          "transportAllowance": true,
          "healthAndPensions": true,
          "severancePay": true,
          "serviceBonus": true,
          "totalSalary": 120000
        }
      ]
    },
    {
      "id": 2,
      "firstName": "Anna",
      "lastName": "Smith",
      "dateOfBirth": new Date("1990-10-20"),
      "gender": "Female",
      "typeCard": "DNI",
      "idCard": "87654321",
      "city": "Los Angeles",
      "address": "456 Elm St",
      "maritalStatus": "Single",
      "phoneNumber": "555-2345",
      "education": {
        "id": 2,
        "level": "University",
        "title": "BA Economics",
        "endDate": new Date("2012-05-15"),
        "nameInstitution": "UCLA"
      },
      "companyId": 102,
      "contact": {
        "id": 2,
        "name": "Tom Smith",
        "phone": "555-6789",
        "relationship": "Brother"
      },
      "contract": [
        {
          "id": 2,
          "contractType": {
            "id": 2,
            "type": "Temporary"
          },
          "startDate": new Date("2013-09-01"),
          "endDate": new Date("2023-09-01"),
          "duration": "10 years",
          "position": "Financial Analyst",
          "baseSalary": 70000,
          "transportAllowance": false,
          "healthAndPensions": true,
          "severancePay": false,
          "serviceBonus": true,
          "totalSalary": 90000
        }
      ]
    },
    {
      "id": 3,
      "firstName": "Michael",
      "lastName": "Brown",
      "dateOfBirth": new Date("1987-07-22"),
      "gender": "Male",
      "typeCard": "DNI",
      "idCard": "23456789",
      "city": "Chicago",
      "address": "789 Cedar St",
      "maritalStatus": "Divorced",
      "phoneNumber": "555-3456",
      "education": {
        "id": 3,
        "level": "University",
        "title": "MSc Mechanical Engineering",
        "endDate": new Date("2010-08-15"),
        "nameInstitution": "Stanford"
      },
      "companyId": 103,
      "contact": {
        "id": 3,
        "name": "Susan Brown",
        "phone": "555-7890",
        "relationship": "Sister"
      },
      "contract": [
        {
          "id": 3,
          "contractType": {
            "id": 3,
            "type": "Freelance"
          },
          "startDate": new Date("2011-10-01"),
          "endDate": new Date("2023-10-01"),
          "duration": "12 years",
          "position": "Project Manager",
          "baseSalary": 90000,
          "transportAllowance": true,
          "healthAndPensions": false,
          "severancePay": false,
          "serviceBonus": false,
          "totalSalary": 90000
        }
      ]
    },
    {
      "id": 4,
      "firstName": "Linda",
      "lastName": "Green",
      "dateOfBirth": new Date("1989-03-30"),
      "gender": "Female",
      "typeCard": "DNI",
      "idCard": "99887766",
      "city": "Miami",
      "address": "321 Oak St",
      "maritalStatus": "Married",
      "phoneNumber": "555-4567",
      "education": {
        "id": 4,
        "level": "University",
        "title": "BSc Marketing",
        "endDate": new Date("2011-08-01"),
        "nameInstitution": "University of Miami"
      },
      "companyId": 104,
      "contact": {
        "id": 4,
        "name": "Gary Green",
        "phone": "555-9876",
        "relationship": "Spouse"
      },
      "contract": [
        {
          "id": 4,
          "contractType": {
            "id": 4,
            "type": "Permanent"
          },
          "startDate": new Date("2012-01-01"),
          "endDate": new Date("2023-01-01"),
          "duration": "11 years",
          "position": "Marketing Manager",
          "baseSalary": 75000,
          "transportAllowance": true,
          "healthAndPensions": true,
          "severancePay": false,
          "serviceBonus": false,
          "totalSalary": 95000
        }
      ]
    },
    {
      "id": 5,
      "firstName": "James",
      "lastName": "Wilson",
      "dateOfBirth": new Date("1975-12-15"),
      "gender": "Male",
      "typeCard": "DNI",
      "idCard": "11223344",
      "city": "San Francisco",
      "address": "555 Pine St",
      "maritalStatus": "Single",
      "phoneNumber": "555-6781",
      "education": {
        "id": 5,
        "level": "University",
        "title": "MBA",
        "endDate": new Date("2000-05-01"),
        "nameInstitution": "Harvard"
      },
      "companyId": 105,
      "contact": {
        "id": 5,
        "name": "Alice Wilson",
        "phone": "555-8765",
        "relationship": "Sister"
      },
      "contract": [
        {
          "id": 5,
          "contractType": {
            "id": 5,
            "type": "Contract"
          },
          "startDate": new Date("2001-07-01"),
          "endDate": new Date("2023-07-01"),
          "duration": "22 years",
          "position": "Operations Manager",
          "baseSalary": 85000,
          "transportAllowance": false,
          "healthAndPensions": true,
          "severancePay": true,
          "serviceBonus": true,
          "totalSalary": 110000
        }
      ]
    },
    {
      "id": 6,
      "firstName": "Elizabeth",
      "lastName": "Johnson",
      "dateOfBirth": new Date("1983-09-10"),
      "gender": "Female",
      "typeCard": "DNI",
      "idCard": "55667788",
      "city": "Seattle",
      "address": "222 Spruce St",
      "maritalStatus": "Widowed",
      "phoneNumber": "555-2348",
      "education": {
        "id": 6,
        "level": "University",
        "title": "PhD in Physics",
        "endDate": new Date("2008-07-15"),
        "nameInstitution": "Princeton"
      },
      "companyId": 106,
      "contact": {
        "id": 6,
        "name": "David Johnson",
        "phone": "555-5432",
        "relationship": "Son"
      },
      "contract": [
        {
          "id": 6,
          "contractType": {
            "id": 6,
            "type": "Permanent"
          },
          "startDate": new Date("2009-08-01"),
          "endDate": new Date("2023-08-01"),
          "duration": "14 years",
          "position": "Research Scientist",
          "baseSalary": 95000,
          "transportAllowance": true,
          "healthAndPensions": true,
          "severancePay": true,
          "serviceBonus": true,
          "totalSalary": 130000
        }
      ]
    },
    {
      "id": 7,
      "firstName": "David",
      "lastName": "Moore",
      "dateOfBirth": new Date("1981-11-20"),
      "gender": "Male",
      "typeCard": "DNI",
      "idCard": "66778899",
      "city": "Boston",
      "address": "654 Maple St",
      "maritalStatus": "Divorced",
      "phoneNumber": "555-3214",
      "education": {
        "id": 7,
        "level": "University",
        "title": "BSc Electrical Engineering",
        "endDate": new Date("2004-12-01"),
        "nameInstitution": "MIT"
      },
      "companyId": 107,
      "contact": {
        "id": 7,
        "name": "Rachel Moore",
        "phone": "555-6521",
        "relationship": "Ex-wife"
      },
      "contract": [
        {
          "id": 7,
          "contractType": {
            "id": 7,
            "type": "Contract"
          },
          "startDate": new Date("2005-01-01"),
          "endDate": new Date("2023-01-01"),
          "duration": "18 years",
          "position": "Senior Engineer",
          "baseSalary": 88000,
          "transportAllowance": false,
          "healthAndPensions": true,
          "severancePay": true,
          "serviceBonus": true,
          "totalSalary": 112000
        }
      ]
    },
    {
      "id": 8,
      "firstName": "Maria",
      "lastName": "Garcia",
      "dateOfBirth": new Date("1992-04-25"),
      "gender": "Female",
      "typeCard": "DNI",
      "idCard": "88990011",
      "city": "Dallas",
      "address": "878 Vine St",
      "maritalStatus": "Married",
      "phoneNumber": "555-4321",
      "education": {
        "id": 8,
        "level": "University",
        "title": "MSc Biochemistry",
        "endDate": new Date("2014-09-01"),
        "nameInstitution": "University of Texas"
      },
      "companyId": 108,
      "contact": {
        "id": 8,
        "name": "Jose Garcia",
        "phone": "555-8762",
        "relationship": "Spouse"
      },
      "contract": [
        {
          "id": 8,
          "contractType": {
            "id": 8,
            "type": "Temporary"
          },
          "startDate": new Date("2015-10-01"),
          "endDate": new Date("2023-10-01"),
          "duration": "8 years",
          "position": "Lab Technician",
          "baseSalary": 65000,
          "transportAllowance": true,
          "healthAndPensions": false,
          "severancePay": false,
          "serviceBonus": false,
          "totalSalary": 65000
        }
      ]
    },
    {
      "id": 9,
      "firstName": "Charles",
      "lastName": "Miller",
      "dateOfBirth": new Date("1978-02-10"),
      "gender": "Male",
      "typeCard": "DNI",
      "idCard": "99001122",
      "city": "Philadelphia",
      "address": "999 Birch St",
      "maritalStatus": "Single",
      "phoneNumber": "555-6543",
      "education": {
        "id": 9,
        "level": "University",
        "title": "BA History",
        "endDate": new Date("2001-05-01"),
        "nameInstitution": "University of Pennsylvania"
      },
      "companyId": 109,
      "contact": {
        "id": 9,
        "name": "Emma Miller",
        "phone": "555-3218",
        "relationship": "Sister"
      },
      "contract": [
        {
          "id": 9,
          "contractType": {
            "id": 9,
            "type": "Freelance"
          },
          "startDate": new Date("2002-06-01"),
          "endDate": new Date("2023-06-01"),
          "duration": "21 years",
          "position": "Archivist",
          "baseSalary": 58000,
          "transportAllowance": false,
          "healthAndPensions": true,
          "severancePay": false,
          "serviceBonus": true,
          "totalSalary": 58000
        }
      ]
    },
    {
      "id": 10,
      "firstName": "Jessica",
      "lastName": "Martinez",
      "dateOfBirth": new Date("1986-06-05"),
      "gender": "Female",
      "typeCard": "DNI",
      "idCard": "22113344",
      "city": "San Diego",
      "address": "213 Cedar St",
      "maritalStatus": "Married",
      "phoneNumber": "555-7621",
      "education": {
        "id": 10,
        "level": "University",
        "title": "BSc Environmental Science",
        "endDate": new Date("2009-05-01"),
        "nameInstitution": "University of California San Diego"
      },
      "companyId": 110,
      "contact": {
        "id": 10,
        "name": "Mark Martinez",
        "phone": "555-9821",
        "relationship": "Spouse"
      },
      "contract": [
        {
          "id": 10,
          "contractType": {
            "id": 10,
            "type": "Permanent"
          },
          "startDate": new Date("2010-07-01"),
          "endDate": new Date("2023-07-01"),
          "duration": "13 years",
          "position": "Environmental Specialist",
          "baseSalary": 77000,
          "transportAllowance": true,
          "healthAndPensions": true,
          "severancePay": true,
          "serviceBonus": true,
          "totalSalary": 97000
        }
      ]
    },
    {
      "id": 11,
      "firstName": "Edward",
      "lastName": "Lee",
      "dateOfBirth": new Date("1988-08-25"),
      "gender": "Male",
      "typeCard": "DNI",
      "idCard": "33445566",
      "city": "Houston",
      "address": "321 Willow St",
      "maritalStatus": "Single",
      "phoneNumber": "555-8899",
      "education": {
        "id": 11,
        "level": "University",
        "title": "MSc Computer Science",
        "endDate": new Date("2011-12-01"),
        "nameInstitution": "Rice University"
      },
      "companyId": 111,
      "contact": {
        "id": 11,
        "name": "Nora Lee",
        "phone": "555-7789",
        "relationship": "Mother"
      },
      "contract": [
        {
          "id": 11,
          "contractType": {
            "id": 11,
            "type": "Permanent"
          },
          "startDate": new Date("2012-01-01"),
          "endDate": new Date("2023-01-01"),
          "duration": "11 years",
          "position": "Software Engineer",
          "baseSalary": 85000,
          "transportAllowance": true,
          "healthAndPensions": true,
          "severancePay": true,
          "serviceBonus": true,
          "totalSalary": 105000
        }
      ]
    }
  ]
}


