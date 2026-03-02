/// <reference types="astro/client" />

interface WeeklyExpressionsWeek {
  weekId: string;
  startDate: string;
  endDate: string;
  expressions: string[];
}

interface WeeklyExpressionsPayload {
  currentWeekId: string;
  currentWeek: WeeklyExpressionsWeek;
  weeks: WeeklyExpressionsWeek[];
  archives: WeeklyExpressionsWeek[];
  selectionMode: 'current' | 'latest_published';
  isCurrentWeek: boolean;
}

interface Window {
  getIsoWeekInfo: (date?: Date) => { weekId: string; startDate: string; endDate: string };
  getWeeklyExpressionsData: () => Promise<WeeklyExpressionsPayload>;
  setWeeklyExpressionsForWeek: (payload: WeeklyExpressionsWeek) => Promise<WeeklyExpressionsWeek>;
  migrateTextesWeekIds: () => Promise<void>;
  repairLegacyMigrationWeeks: () => Promise<{
    repaired: boolean;
    reason?: string;
    expectedWeekId?: string;
    selectionMode?: 'current' | 'latest_published';
  }>;
}
