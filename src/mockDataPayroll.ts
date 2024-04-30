export const mockDataPayroll = {
  "payrolls": [
    {
      "id": "PR12345",
      "state": "active",
      "liquidationType": "monthly",
      "payrollName": "Monthly Payroll October 2024",
      "month": "October",
      "year": 2024,
      "employees": [
        {
          "id": 1,
          "firstName": "John",
          "lastName": "Doe",
          "dateOfBirth": "1985-02-15T00:00:00.000Z",
          "gender": "male",
          "typeCard": "DNI",
          "idCard": "12345678X",
          "city": "New York",
          "address": "123 Elm St",
          "maritalStatus": "married",
          "phoneNumber": "123-456-7890",
          "education": {
            "degree": "Bachelor's",
            "fieldOfStudy": "Computer Science",
            "schoolName": "MIT",
            "graduationYear": 2007
          },
          "companyId": 101,
          "contact": {
            "email": "john.doe@example.com",
            "alternativePhone": "987-654-3210"
          },
          "contract": [
            {
              "contractType": "permanent",
              "startDate": "2009-03-01T00:00:00.000Z",
              "endDate": null,
              "salary": 90000
            }
          ]
        },
        {
          "id": 2,
          "firstName": "Jane",
          "lastName": "Smith",
          "dateOfBirth": "1990-05-25T00:00:00.000Z",
          "gender": "female",
          "typeCard": "DNI",
          "idCard": "87654321Y",
          "city": "Los Angeles",
          "address": "456 Oak St",
          "maritalStatus": "single",
          "phoneNumber": "321-654-0987",
          "education": {
            "degree": "Master's",
            "fieldOfStudy": "Finance",
            "schoolName": "Harvard",
            "graduationYear": 2012
          },
          "companyId": 102,
          "contact": {
            "email": "jane.smith@example.com",
            "alternativePhone": "654-321-9876"
          },
          "contract": [
            {
              "contractType": "contractor",
              "startDate": "2022-01-10T00:00:00.000Z",
              "endDate": "2025-01-09T00:00:00.000Z",
              "salary": 70000
            }
          ]
        }
      ],
      "totalIncome": 160000,
      "totalDeductions": 32000,
      "totalNet": 128000
    },
    {
      "id": "PR12346",
      "state": "active",
      "liquidationType": "monthly",
      "payrollName": "Monthly Payroll November 2024",
      "month": "November",
      "year": 2024,
      "employees": [
        {
          "id": 3,
          "firstName": "Alice",
          "lastName": "Johnson",
          "dateOfBirth": "1992-11-15T00:00:00.000Z",
          "gender": "female",
          "typeCard": "DNI",
          "idCard": "23456789M",
          "city": "Chicago",
          "address": "789 Pine St",
          "maritalStatus": "married",
          "phoneNumber": "432-567-8901",
          "education": {
            "degree": "PhD",
            "fieldOfStudy": "Physics",
            "schoolName": "Stanford",
            "graduationYear": 2016
          },
          "companyId": 103,
          "contact": {
            "email": "alice.johnson@example.com",
            "alternativePhone": "890-123-4567"
          },
          "contract": [
            {
              "contractType": "permanent",
              "startDate": "2017-05-01T00:00:00.000Z",
              "endDate": null,
              "salary": 120000
            }
          ]
        }
      ],
      "totalIncome": 120000,
      "totalDeductions": 24000,
      "totalNet": 96000
    },
    {
      "id": "PR12347",
      "state": "active",
      "liquidationType": "monthly",
      "payrollName": "Monthly Payroll December 2024",
      "month": "December",
      "year": 2024,
      "employees": [
        {
          "id": 4,
          "firstName": "Bob",
          "lastName": "White",
          "dateOfBirth": "1988-03-30T00:00:00.000Z",
          "gender": "male",
          "typeCard": "DNI",
          "idCard": "34567890N",
          "city": "San Francisco",
          "address": "321 Spruce St",
          "maritalStatus": "single",
          "phoneNumber": "543-678-9012",
          "education": {
            "degree": "Master's",
            "fieldOfStudy": "Electrical Engineering",
            "schoolName": "UC Berkeley",
            "graduationYear": 2010
          },
          "companyId": 104,
          "contact": {
            "email": "bob.white@example.com",
            "alternativePhone": "901-234-5678"
          },
          "contract": [
            {
              "contractType": "contractor",
              "startDate": "2023-02-01T00:00:00.000Z",
              "endDate": "2026-02-01T00:00:00.000Z",
              "salary": 80000
            }
          ]
        }
      ],
      "totalIncome": 80000,
      "totalDeductions": 16000,
      "totalNet": 64000
    }
  ]
}