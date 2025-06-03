import "./GuideSelection.css";
import { Link } from 'react-router-dom';
import archonImg from "/src/assets/specs/archon.jpg";
import voidWeaverImg from "/src/assets/specs/voidweaver.jpg";

const GuideSelection = () => {

    return (
        <div className="guide-selection">
            <Link to="/guides/archon" className="guide-link archon-link">
                <img src={archonImg} alt="Archon" />
            </Link>

            <Link to="/guides/voidweaver" className="guide-link voidweaver-link">
                <img src={voidWeaverImg} alt="Voidweaver" />
            </Link>
        </div>
    )

};



export default GuideSelection;