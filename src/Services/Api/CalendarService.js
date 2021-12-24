import axios from "axios"

const api = axios
api.defaults.baseURL = process.env.REACT_APP_API_URL

const getCalendar = (setApiAvailable, setCalendar, setCurrent, setNext, setPrevious, setDaysOfWeek, year = '', month = '') => {
    api.get(`/calendar?curMonth=${month}&curYear=${year}`).then(response => {
        const {calendar, current, next, previous, daysOfWeek} = response.data
        setCalendar(calendar)
        setCurrent(current)
        setNext(next)
        setPrevious(previous)
        setDaysOfWeek(daysOfWeek)
        setApiAvailable(true)
    }).catch(() => {
        setApiAvailable(false)
    });
}

export default getCalendar