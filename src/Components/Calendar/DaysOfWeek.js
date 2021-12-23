const DaysOfWeek = ({daysOfWeek}) => {
    return (
        <div className={'calendar-week-days-container w-100'}>
            {!!daysOfWeek && daysOfWeek.map((weekDay, key) => {
                return (
                    <div key={key} className={'week-day'}>{weekDay}</div>
                )
            })}
        </div>
    )
}

export default DaysOfWeek