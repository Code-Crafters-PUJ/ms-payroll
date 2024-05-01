export const mockDataPayroll = {
  "payrolls": [
    {
      "id": "PR12345",
      "state": "active",
      "liquidationType": "Mensual",
      "payrollName": "Nomina para POs",
      "month": "Octubre (I)",
      "year": 2024,
      "employees": [
        {
          "id": 1,
          "firstName": "Juana",
          "lastName": "Martinez",
          "dateOfBirth": new Date("1985-05-15"),
          "gender": "Masculino",
          "typeCard": "Cédula de ciudadanía",
          "idCard": "12345678",
          "city": "Bogotá D. C.",
          "address": "Aralia de castilla",
          "maritalStatus": "Casado",
          "phoneNumber": "523-98-74",
          "education": {
            "id": 1,
            "level": "Profesional",
            "title": "Ingeniero de sistemas",
            "endDate": new Date("2007-06-01"),
            "nameInstitution": "Universidad Javeridad"
          },
          "companyId": 101,
          "contact": {
            "id": 1,
            "name": "Felipe Garcia",
            "phone": "555-5678",
            "relationship": "Esposo"
          },
          "contract": [
            {
              "id": 1,
              "contractType": {
                "id": 1,
                "type": "Término Indefinido"
              },
              "startDate": new Date("2023-05-01"),
              "endDate": new Date("2023-11-01"),
              "duration": "6 meses",
              "position": "Desarrollador",
              "baseSalary": 80000,
              "transportAllowance": true,
              "healthAndPensions": true,
              "severancePay": true,
              "serviceBonus": true,
              "totalSalary": 120000
            }
          ]
        }
      ],
      "totalIncome": 160000,
      "totalDeductions": 32000,
      "totalNet": 128000
    }
  ]
}