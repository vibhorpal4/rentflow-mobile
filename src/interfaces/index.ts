export interface IRecentActivity {
  id: number;
  icon: string;
  title: string;
  details: string;
  timestamp: string;
}

export interface IMaintenanceRequest {
  id: string;
  propertyName: string;
  tenantName: string;
  issue: string;
  status: 'Pending' | 'In Progress' | 'Resolved';
  requestDate: string;
  dueDate?: string;
}

export interface ITenantReview {
  id: string;
  tenantName: string;
  feedback: string;
  rating: number; // Rating out of 5
  timestamp: string;
}

export interface IFinancialSummary {
  totalIncome: number;
  totalExpenses: number;
  netProfit: number;
  rentCollected: number;
  rentDue: number;
  maintenanceCosts: number;
}

export interface ITenantApplication {
  id: string;
  tenantName: string;
  propertyName: string;
  applicationDate: string;
  status: string;
}

export interface IPaymentHistory {
  id: string;
  amount: string;
  paymentDate: string;
  paymentMode: string;
}
