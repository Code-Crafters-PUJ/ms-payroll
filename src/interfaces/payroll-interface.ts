export interface Payroll {
    id: string;
    state: string;
    liquidationType: string;
    payrollName: string;
    month: string;
    year: number;
    employees: Employee[];
    totalIncome: number;
    totalDeductions: number;
    totalNet: number;
  }
  
  export interface Employee {
    id: number;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    gender: string;
    typeCard: string;
    idCard: string;
    city: string;
    address: string;
    maritalStatus: string;
    phoneNumber: string;
    education: Education;
    companyId: number;
    contact: Contact;
    contract: Contract[];
  }
  
  export interface Education {
    id: number;
    level: string;
    title: string;
    endDate: Date;
    nameInstitution: string;
  }
  
  export interface Contact {
    id: number;
    name: string;
    phone: string;
    relationship: string;
  }
  
  export interface Contract {
    id: number;
    contractType: ContractType;
    startDate: Date;
    endDate: Date;
    duration: string;
    position: string;
    baseSalary: number;
    transportAllowance: boolean;
    healthAndPensions: boolean;
    severancePay: boolean;
    serviceBonus: boolean;
    totalSalary: number;
  }
  
  export interface ContractType {
    id: number;
    type: string;
  }
  