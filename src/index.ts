import { toDate } from 'date-fns-tz'
import { getHours } from 'date-fns'

/**
 * @param time {Date} - Input date
 * @param {string} [timeZone='Eurpe/Berlin'] - Input timezone
 */
export default function gx (time: Date, timeZone = 'Europe/Berlin'): string {
  const hours: number = getHours(
		toDate(time, {
      timeZone
    })
  )

  if (hours >= 4 && hours < 16) {
    return 'gm'
  } else if (hours >= 16 && hours <= 20) {
    return 'ge'
  } else {
    return 'gn'
  }
}
