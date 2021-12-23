import {Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";

const Previous = ({callCalendar, previous}) => {
    return (
        <div className={'control-left control-prev'}>
            <Button onClick={() => callCalendar(previous)}>
                <FontAwesomeIcon icon={faChevronLeft}/>
            </Button>
        </div>
    )
}

export default Previous