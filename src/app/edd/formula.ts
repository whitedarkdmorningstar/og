const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

// Calculate EDD by LMP
export function calculateEDDByLMP(day: number, month: number, year: number) {
  const lmp = new Date(year, month, day).getTime()

  // Add 40 weeks to lmp
  const duration = 40 * 7 * 24 * 60 * 60 * 1000

  const edd = new Date(lmp + duration)
  const dd = edd.getDate().toString().padStart(2, "0")
  const mm = (edd.getMonth() + 1).toString().padStart(2, "0")
  const yyyy = edd.getFullYear().toString()

  return `${dd}.${mm}.${yyyy} or ${MONTHS[edd.getMonth()]} ${dd}, ${yyyy}`
}
