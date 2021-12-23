import {Next, Previous, Title} from "./index";

const AllControls = ({callCalendar, previous, current, next}) => {
    return (
        <div className={'calendar-controls d-flex justify-content-between align-items-center mb-3'}>
            <Previous callCalendar={callCalendar} previous={previous} />
            <Title current={current} />
            <Next callCalendar={callCalendar} next={next}/>
        </div>
    )
}

export default AllControls