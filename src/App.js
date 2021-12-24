import 'bootstrap/dist/css/bootstrap.min.css';
import {Calendar} from '../src/Components/Calendar'
import {useState, useEffect} from "react";
import CalendarService from "./Services/Api/CalendarService";
import {Alert, Button, Container, Nav, Navbar} from "react-bootstrap";

function App() {
    const [apiAvailable, setApiAvailable] = useState(false)
    const [calendar, setCalendar] = useState()
    const [current, setCurrent] = useState()
    const [next, setNext] = useState()
    const [previous, setPrevious] = useState()
    const [daysOfWeek, setDaysOfWeek] = useState()

    const callNextOrPrevMonth = (year, month) => {
        CalendarService(
            setApiAvailable,
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
        <div className={'App'}>
            <Navbar bg={'dark'} variant={'dark'} expand={'lg'}>
                <Container>
                    <Navbar.Brand href="#">Test Authorify - Jean Jar</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="https://github.com/jeanjar/test-authorify-backend" target={'_blank'}>BackEnd Project</Nav.Link>
                            <Nav.Link href="https://github.com/jeanjar/test-authorify-frontend" target={'_blank'}>FrontEnd Project</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container className={'mt-5'}>
                {!apiAvailable &&
                    <div>
                        <Alert variant={'danger'}>
                            Api unavailable, did you start it?
                        </Alert>
                        <Button onClick={() => callNextOrPrevMonth()} variant={'primary'}>Retry</Button>
                    </div>
                }
                {apiAvailable &&
                    <Calendar
                        calendar={calendar}
                        current={current}
                        next={next}
                        previous={previous}
                        daysOfWeek={daysOfWeek}
                        callNextOrPrevMonth={callNextOrPrevMonth}
                    />
                }
            </Container>
        </div>
    );
}

export default App;
