const Title = ({current}) => {
    return (
        <div className={'title'}>
            <b>{!!current && current.monthName + ' ' + current.year}</b>
        </div>
    )
}

export default Title