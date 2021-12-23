import {Button, Col, Row} from "react-bootstrap";

const Hours = ({slots, setSelectedSchedule}) => {
    return (
        <Row>
            {!!slots && slots.map(({text, fullText}, key) => {
                return (
                    <Col key={key} xs={4} className={'mb-2'}>
                        <Button className={'w-100'} onClick={() => setSelectedSchedule(fullText)} variant={'outline-primary'}>{text}</Button>
                    </Col>
                )
            })}
        </Row>
    )
}

export default Hours