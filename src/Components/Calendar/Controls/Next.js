import {Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";

const Next = ({callCalendar, next}) => {
    return (
        <div className={'control-right control-next'}>
            <Button onClick={() => callCalendar(next)}>
                <FontAwesomeIcon icon={faChevronRight}/>
            </Button>
        </div>
    )
}

export default Next