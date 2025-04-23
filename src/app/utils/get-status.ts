import { BadgeVariant } from "../components/shared/badge/badge.component";

type Status = 'active' | 'inactive' | string;

export function statusVariant(status: Status): BadgeVariant {
  const statusClasses: Record<string, string> = {
    active: 'success',
    inactive: 'error',
  };

  return (statusClasses[status] ?? 'warning') as BadgeVariant;
}
