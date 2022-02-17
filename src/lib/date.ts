import { DateTime } from "luxon"



export const resDate = () => {
    const currentDate = DateTime.now().setZone('Europe/London')

    let month = currentDate.month
    const currentMonth = (month: any) => {
        if(month < 10){
            return month = '0'+month
        } else {
            return month
        }
    }

    let day = currentDate.day
    const currentDay = (day: any) => {
        if(day < 10){
            return day = '0'+day
        } else {
            return day
        }
    }

    let hours = currentDate.hour
    const currentHours = (hours: any) => {
        if(hours < 10){
            return hours = '0'+ hours
        } else {
            return hours
        }
    }

    let minutes = currentDate.minute
    const currentMinutes = (minutes: any) => {
        if(minutes < 10){
            return minutes = '0'+minutes
        } else {
            return minutes
        }
    }

    let seconds = currentDate.second
    const currentSeconds = (seconds: any) => {
        if(seconds < 10){
            return seconds = '0'+seconds
        } else {
            return seconds
        }
    }
    return (
        `${currentDate.year}${currentMonth(month)}${currentDay(day)}${currentHours(hours)}${currentMinutes(minutes)}${currentSeconds(seconds)}`
    )
}



