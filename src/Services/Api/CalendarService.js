import axios from "axios"

const api = axios
api.defaults.baseURL = 'http://localhost:8888'

const getCalendar = (setCaledar, setCurrent, setNext, setPrevious, setDaysOfWeek, year = '', month = '') => {
    api.get(`/calendar?curMonth=${month}&curYear=${year}`).then(response => {
        const {calendar, current, next, previous, daysOfWeek} = response.data
        setCaledar(calendar)
        setCurrent(current)
        setNext(next)
        setPrevious(previous)
        setDaysOfWeek(daysOfWeek)
    });
}

export default getCalendar