import React from 'react'

const Rotation = ({ spec }) => {

    return (
        <>
            <h2>3. {spec.charAt(0).toUpperCase() + spec.slice(1)} rotation</h2>
            <h3>General rotation bulletpoints</h3>
            <ul className="rotation-list">
                <li><a href="https://www.wowhead.com/spell=335467/devouring-plague"></a> is going to be your bread and butter.
                    Prioritise using it to make sure you never overcap your insanity beyond 100 (or 150 with <a href="https://www.wowhead.com/spell=407430/voidtouched"></a>)
                    and keep it up to maximise <a href="https://www.wowhead.com/spell=343690/mastery-shadow-weaving"></a> uptime.</li>
                <li><span style={{ fontWeight: "bold" }}>KEEP YOUR COOLDOWNS ROLLING</span> - prioritise lower cooldown spells (e.g. <a href="https://www.wowhead.com/spell=8092/mind-blast"></a>) over longer cooldowns to maximize your casts over long fights. </li>
                <li>And obviously maintain your DoTs (those can also be refreshed in the pandemic timer at 33% of their duration to extend current duration, use that to your advantage when there are no cooldowns available or resources to be spent.)</li>
                <li>Your AoE will revolve around the usage of <a href="https://www.wowhead.com/spell=406777/whispering-shadows"></a> and <a href="https://www.wowhead.com/spell=199484/psychic-link"></a>. </li>
            </ul>
            {spec === "archon" && (
                <>
                    <h3>Archon specific opener/priority list</h3>
                    <p>The general Archon opener for single target would be following:<br></br></p>
                    <ol className="rotation-list-spec">
                        <li>Apply DoT (with either <a href="https://www.wowhead.com/spell=34914/vampiric-touch"></a> or <a href="https://www.wowhead.com/spell=205385/shadow-crash"></a> if available)</li>
                        <li><a href="https://www.wowhead.com/spell=34433/shadowfiend"></a></li>
                        <li><a href="https://www.wowhead.com/spell=120644/halo"></a></li>
                        <li>Dump your Mind Blast charges and cast <a href="https://www.wowhead.com/spell=228260/void-eruption"></a></li>
                        <li><a href="https://www.wowhead.com/spell=10060/power-infusion"></a> make sure to cast this on another person to make use of <a href="https://www.wowhead.com/spell=373466/twins-of-the-sun-priestess"></a></li>
                        <li><a href="https://www.wowhead.com/spell=228266/void-bolt"></a></li>
                        <li><a href="https://www.wowhead.com/spell=335467/devouring-plague"></a></li>
                        <li><a href="https://www.wowhead.com/spell=263165/void-torrent"></a></li>
                        <li><a href="https://www.wowhead.com/spell=228266/void-bolt"></a></li>
                        <li><a href="https://www.wowhead.com/spell=335467/devouring-plague"></a></li>
                        <li><a href="https://www.wowhead.com/spell=391403/mind-flay-insanity"></a></li>
                        <li>After this, you proceed with your normal priority list. Don't forget to play around your procs inbetween all of these casts.</li>
                    </ol>
                    <p>Messing up this order won't have a massive impact on your overall performance through the fight but make sure to build muscle memory for it.<br></br>
                        On AoE, the only difference is waiting for mobs to be stacked to use your Shadow Crash, you can pre-DoT them with VT while the tank is pulling.</p>

                </>
            )}
            {spec === "voidweaver" && (
                <>
                    <h3>Voidweaver specific opener/priority list</h3>
                    <p>The general Voidweaver opener for single target would be following:<br></br></p>
                    <ol className="rotation-list-spec">
                        <li>Apply DoT (with either <a href="https://www.wowhead.com/spell=34914/vampiric-touch"></a> or <a href="https://www.wowhead.com/spell=205385/shadow-crash"></a> if available)</li>
                        <li><a href="https://www.wowhead.com/spell=34433/shadowfiend"></a></li>
                        <li><a href="https://www.wowhead.com/spell=391109/dark-ascension"></a></li>
                        <li><a href="https://www.wowhead.com/spell=10060/power-infusion"></a> make sure to cast this on another person to make use of <a href="https://www.wowhead.com/spell=373466/twins-of-the-sun-priestess"></a></li>
                        <li><a href="https://www.wowhead.com/spell=32379/shadow-word-death"></a></li>
                        <li>Cast Mind Flay/Mind Spike to have enough insanity to cast <a href="https://www.wowhead.com/spell=335467/devouring-plague"></a> then cast it.</li>
                        <li><a href="https://www.wowhead.com/spell=263165/void-torrent"></a></li>
                        <li><a href="https://www.wowhead.com/spell=450215/void-blast"></a></li>
                        <li><a href="https://www.wowhead.com/spell=391403/mind-flay-insanity"></a></li>
                        <li>After this, you proceed with your normal priority list. Don't forget to play around your procs inbetween all of these casts.</li>
                    </ol>
                    <p>Messing up this order won't have a massive impact on your overall performance through the fight but make sure to build muscle memory for it.<br></br>
                        On AoE, the only difference is waiting for mobs to be stacked to use your Shadow Crash, you can pre-DoT them with VT while the tank is pulling.</p>
                </>
            )}
        </>
    );
};

export default Rotation;