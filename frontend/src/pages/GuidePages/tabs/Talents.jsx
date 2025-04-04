import React from 'react';
import archonRaidImage from '../../../assets/specs/archon_raid.png'; // Import the image
import archonMImage from '../../../assets/specs/archon_m.png';
import voidweaverRaidImage from '../../../assets/specs/voidweaver_raid.png';
import voidweaverMImage from '../../../assets/specs/voidweaver_m.png';
import './Talents.css'

const Talents = ({ spec }) => {
    return (
        <>
            <h2>2. {spec.charAt(0).toUpperCase() + spec.slice(1)} talents</h2>
            <div className="talents-container">
                {spec === "archon" && (
                    <>
                        <h3>Raiding</h3>
                        <p>Due to synergies with the Archon hero talents, we will be taking <a href="https://www.wowhead.com/spell=228260/void-eruption"></a> and keeping Mind Flay. <br></br>
                            <a href="https://www.wowhead.com/spell=453828/energy-cycle"></a> also means that we are required to play talents centered around <a href="https://www.wowhead.com/spell=341491/shadowy-apparitions"></a>.</p>
                        <img src={archonRaidImage} alt="Archon Raiding Talents" className="talent-image" />
                        <h3>Mythic+</h3>
                        <p>The major difference between raiding and M+ builds comes in getting rid of 
                            <a href="https://www.wowhead.com/spell=373212/insidious-ire?def=108688&rank=1" ></a>
                             and opting for <a href="https://www.wowhead.com/spell=373280/idol-of-nzoth"></a> instead.</p>
                        <img src={archonMImage} alt="Archon Mythic+ Talents" className="talent-image" />
                    </>
                )}
                {spec === "voidweaver" && (
                    <>
                        <h3>Raiding</h3>
                        <p>Voidweavers will spec out of Shadowy Apparitions boosting talents and instead opt for <a href="https://www.wowhead.com/spell=73510/mind-spike"></a> oriented route for more single target damage.</p>
                        <img src={voidweaverRaidImage} alt="Voidweaver Raiding Talents" className="talent-image" />
                        <h3>Mythic+</h3>
                        <p>In Mythic+, Voidweaver favors <a href="https://www.wowhead.com/spell=373280/idol-of-nzoth"></a> over <a href="https://www.wowhead.com/spell=73510/mind-spike"></a> due to its increased AoE capabilities.</p>
                        <img src={voidweaverMImage} alt="Voidweaver Mythic+ Talents" className="talent-image" />
                    </>
                )}
            </div>
        </>
    );
};

export default Talents;