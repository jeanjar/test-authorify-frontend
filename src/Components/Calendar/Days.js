const Days = ({cal, buildTimeSlots}) => {
    return (
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
    )
}

export default Days