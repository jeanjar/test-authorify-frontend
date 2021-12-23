import 'bootstrap/dist/css/bootstrap.min.css';
import {Calendar} from '../src/Components/Calendar'
import {useState, useEffect} from "react";
import CalendarService from "./Services/Api/CalendarService";
import {Container} from "react-bootstrap";

function App() {
    const [calendar, setCalendar] = useState();
    const [current, setCurrent] = useState();
    const [next, setNext] = useState();
    const [previous, setPrevious] = useState();
    const [daysOfWeek, setDaysOfWeek] = useState();

    const callNextOrPrevMonth = (year, month) => {
        CalendarService(
            setCalendar,
            setCurrent,
            setNext,
            setPrevious,
            setDaysOfWeek,
            year,
            month
        )
    }

    useEffect(() => {
        callNextOrPrevMonth()
    }, [null])

    return (
        <div className="App">
            <Container className={'mt-5'}>
                <Calendar
                    calendar={calendar}
                    current={current}
                    next={next}
                    previous={previous}
                    daysOfWeek={daysOfWeek}
                    callNextOrPrevMonth={callNextOrPrevMonth}
                />
            </Container>
        </div>
    );
}

export default App;
