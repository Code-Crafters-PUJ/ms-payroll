export const mockDataEmployee = {
  "employees": [
    {
      "id": 1,
      "firstName": "Juana",
      "lastName": "Martinez",
      "dateOfBirth": new Date("1985-05-15"),
      "gender": "Masculino",
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
    }
  ]
}


