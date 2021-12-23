import './index.scss'
import {Button, Col, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons"
import Hours from "../Hours";
import {DaysOfWeek, SelectedTim} from "../index";
import {AllControls, Next, Previous, Title} from "../Controls";
import Days from "../Days";

const Calendar = ({calendar, current, next, previous, daysOfWeek, callNextOrPrevMonth}) => {

    const [slots, setSlots] = useState(null)
    const [selectedSchedule, setSelectedSchedule] = useState(null)
    const [cal, setCal] = useState(null)

    useEffect(() => {
        if (!!calendar) {
            const newCal = [...calendar].map(item => {
                item.isChecked = false;

                return item;
            });
            setCal(newCal)
        }
    }, [calendar])

    const buildTimeSlots = (timeSlots, clickRef) => {
        if (timeSlots !== null) {
            setSelectedSchedule(null)
            setSlots(timeSlots)

            const newCal = [...cal].map((item, k) => {
                item.isChecked = k === clickRef;

                return item;
            });

            setCal(newCal)
        }
    }

    const callCalendar = ({year, month}) => {
        setSlots(null)
        setSelectedSchedule(null)
        callNextOrPrevMonth(year, month)
    }

    return (
        <>
            <Row className={'d-flex justify-content-center align-items-center mb-3'}>
                <Col xs={6}>
                    <div>
                        <AllControls callCalendar={callCalendar} previous={previous} next={next} current={current}/>
                        <DaysOfWeek daysOfWeek={daysOfWeek}/>
                        <Days cal={cal} buildTimeSlots={buildTimeSlots}/>
                    </div>
                </Col>
                <Col xs={4}>
                    <Hours slots={slots} setSelectedSchedule={setSelectedSchedule}/>
                </Col>
            </Row>
            <Row>
                <SelectedTim selectedSchedule={selectedSchedule}/>
            </Row>
        </>

    )


}

export default Calendar