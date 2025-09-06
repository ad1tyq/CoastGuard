export interface AuditEntry {
  id: string;
  ts: string;
  event: string;
}

export interface Transaction {
  label: string;
  amount: number;
  details: string;
}
