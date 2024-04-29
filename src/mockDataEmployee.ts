export const mockDataEmployee = {
  employees: [
      {
          id: 1,
          idCard: '123456789',
          firstName: 'Juan',
          lastName: 'Pérez',
          dateOfBirth: new Date('1990-05-15'),
          address: 'Calle 123, Ciudad XYZ',
          city: 'Ciudad XYZ',
          education: {
              id: 1,
              name: 'Universidad ABC',
              level: 'Licenciatura',
              endDate: new Date('2012-12-31'),
              title: 'Licenciado en Ingeniería',
          },
          companyId: 101,
          contact: {
              id: 1,
              name: 'María Pérez',
              phone: '555-1234',
              relationship: 'Hermana',
          },
          contract: [
              {
                  id: 1,
                  number: 'C-001',
                  startDate: new Date('2023-01-01'),
                  endDate: new Date('2023-12-31'),
                  contractType: {
                      id: 1,
                      type: 'Tiempo completo',
                  },
                  baseSalary: 2000,
                  transportAllowance: true,
                  healthAndPensions: true,
                  severancePay: true,
                  serviceBonus: true,
                  totalSalary: 2500,
              },
          ],
      }
  ]
}
