export function formatFullDate ( timestamp ){

  const date = new Date(timestamp)
  
  const dayName = getDayName(date.getDay())
  const monthName = getMonthName(date.getMonth())
  const hoursMinute = getHoursMinute(date)

  const dateStr = `${dayName}, ${monthName} ${date.getDate()}, ${date.getFullYear()} ${hoursMinute}`

  return dateStr
}

export function formatSimpleDate ( timestamp ) {

  const date = new Date(timestamp)
  
  const monthName = getMonthName(date.getMonth())
  const dateStr = `${monthName} ${date.getDate()}, ${date.getFullYear()}`

  return dateStr
}

function getDayName( dayIndex ){
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  return dayNames[ dayIndex ]
}

function getMonthName( monthIndex ){
  const monthNames = ['January', 'Februray', 'March', 'April', 'May', 'June', 'July', 'August', 'October', 'November', 'December']
  return monthNames[ monthIndex ]
}

function getHoursMinute(date) {
  let hours = date.getHours()
  let minutes = date.getMinutes()

  if(hours < 10 ){
    hours = `0${hours}`
  }
  
  if(minutes < 10){
    minutes = `0${minutes}`
  }

  return `${hours}:${minutes}`
}