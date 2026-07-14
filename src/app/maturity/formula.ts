// Calculate MBD by EDD
export function calculateMaturityByEDD(
  day: number,
  month: number,
  year: number,
) {
  // month must be month - 1
  const edd = new Date(year, month - 1, day).getTime();
  const today = new Date();
  const todate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
  ).getTime();

  if (edd < todate) return "Error! EDD should not less than today.";

  const daysLeft = Math.floor((edd - todate) / (1000 * 60 * 60 * 24));

  const duration = 40 * 7;

  if (daysLeft > 43 * 7)
    return "Error! EDD should not be farther than 43 weeks from today.";

  const maturity = duration - daysLeft;
  const weeks = Math.floor(maturity / 7);
  const days = maturity % 7;

  const week = weeks > 0 ? `${weeks} ${weeks === 1 ? "week" : "weeks"}` : "";
  const date = days > 0 ? ` ${days} ${days === 1 ? "day" : "days"}` : "";

  return `${week}${date}`;
}
