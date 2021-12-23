import {Col} from "react-bootstrap";

const SelectedTim = ({selectedSchedule}) => {
    return (
        <Col className={'text-center'}>
            <h3>{selectedSchedule ? 'Selected Tim: ' + selectedSchedule : ''}</h3>
        </Col>
    )
}

export default SelectedTim