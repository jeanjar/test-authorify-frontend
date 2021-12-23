import './index.scss'
import {Button, Col, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons"

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
        if(timeSlots !== null) {
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

    const build = (calendar, daysOfWeek, current, next, previous) => {
        return (
            <div>
                <div className={'calendar-controls d-flex justify-content-between align-items-center mb-3'}>
                    <div className={'control-left control-prev'}>
                        <Button onClick={() => callCalendar(previous)}>
                            <FontAwesomeIcon icon={faChevronLeft}/>
                        </Button>
                    </div>
                    <div className={'title'}>
                        <b>{!!current && current.monthName + ' ' + current.year}</b>
                    </div>
                    <div className={'control-right control-next'}>
                        <Button onClick={() => callCalendar(next)}>
                            <FontAwesomeIcon icon={faChevronRight}/>
                        </Button>
                    </div>
                </div>
                <div className={'calendar-week-days-container w-100'}>
                    {!!daysOfWeek && daysOfWeek.map((weekDay, key) => {
                        return (
                            <div key={key} className={'week-day'}>{weekDay}</div>
                        )
                    })}
                </div>
                <div className={'calendar-days-container w-100'}>
                    {!!cal && cal.map(({text, currentMonth, currentDay, currentYear, timeSlots, isChecked}, key) => {
                        return (
                            <div onClick={() => buildTimeSlots(timeSlots, key)} key={key}
                                 className={
                                     'day' +
                                     ((currentDay && currentMonth && currentYear) ? ' current-day' : '') +
                                     (isChecked ? ' checked' : '') +
                                     (timeSlots === null ? ' disabled-day' : '')
                                 }
                            >
                                {text}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

    return (
        <>
            <Row className={'d-flex justify-content-center align-items-center mb-3'}>
                <Col xs={6}>
                    {build(calendar, daysOfWeek, current, next, previous)}
                </Col>
                <Col xs={4}>
                    <Row>
                        {!!slots && slots.map(({text, fullText}, key) => {
                            return (
                                <Col key={key} xs={4} className={'mb-2'}>
                                    <Button className={'w-100'} onClick={() => setSelectedSchedule(fullText)} variant={'outline-primary'}>{text}</Button>
                                </Col>
                            )
                        })}
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col className={'text-center'}>
                    <h3>{selectedSchedule ? 'Selected Tim: ' + selectedSchedule : ''}</h3>
                </Col>
            </Row>
        </>

    )


}

export default Calendar