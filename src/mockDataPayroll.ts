export const mockDataPayroll = {
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
  }
  