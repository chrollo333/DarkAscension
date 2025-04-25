import React from 'react'

const Basics = ({ spec }) => {

    return (
        <>
            <h2>1. {spec.charAt(0).toUpperCase() + spec.slice(1)} basics</h2>
            <div>
                {spec === "archon" && (
                    <>
                        <p>The entire archon playstyle revolves around the usage of your <a href="https://www.wowhead.com/spell=120517/halo">Halo</a> which this specialization empowers, mostly just adding onto the usual shadow priest rotation.
                            Thanks to Halo being on a 1 minute cooldown,
                            the spec is able to achieve high burst and decent off-healing in relatively short intervals.</p>
                        <p>Most of your rotation will revolve around not overcapping your <a href="https://www.wowhead.com/spell=391399/surge-of-insanity">Surge of Insanity</a> procs and your Insanity resource.<br></br>
                            Archon prefers taking <a href="https://www.wowhead.com/spell=228260/void-eruption">Void Eruption</a> over <a href="https://www.wowhead.com/spell=391109/dark-ascension">Dark Ascension</a> which makes it work better in large and extended pulls
                            but generally means that in lower keys, you might get very minimal value from this spec due to your ramping times.</p>
                        <p>To sum it all up, Archon is very familiar to Dragonflight shadow priest playstyle that also entails <span className="positive">alot of strong off-healing and high target sustained AoE.</span></p>
                        <p> It comes with <span className="negative">very limited mobility, low flavour and some distracting visuals from <a href="https://www.wowhead.com/spell=120517/halo">Halo</a>.</span></p>
                    </>
                )}
                {spec === "voidweaver" && (
                    <>
                        <p>Voidweaver's playstyle revolves around the <a href="https://www.wowhead.com/spell=263165/void-torrent">Void Torrent</a> talent, basically forcing you into it.</p>
                        <p>On casting Void Torrent, you throw an <a href="https://www.wowhead.com/spell=447444/entropic-rift">Entropic Rift</a> at your target which morphs your <a href="https://www.wowhead.com/spell=8092/mind-blast"> Mind Blast</a> into <a href="https://www.wowhead.com/spell=450405/void-blast">Void Blast</a>.
                            <br></br>Your goal will be to cast as many of those in each of your rift windows, typically 3 but on higher haste levels we might be able to cast 4. </p>
                        <p>Due to multiple talent interactions, Voidweaver builds take <a href="https://www.wowhead.com/spell=391109/dark-ascension">Dark Ascension</a> and heavily lean into <a href="https://www.wowhead.com/spell=73510/mind-spike"> Mind Spike</a> but due to how closely competitive Mind Spike and Mind Flay are, it will depend on preference of the user.</p>
                        <p>Voidweaver's <span className="positive">strong low target count AoE, visuals, extra barrier damage and enhanced mobility due to movement in Void Torrent </span>
                            could be offset by their <span className="negative">susceptibility to enemy movement due to <a href="https://www.wowhead.com/spell=447444/entropic-rift">Entropic Rift</a> moving quite slow, being punishing and having weaker, situational defensives.</span></p>



                    </>
                )}
            </div>
        </>
    );
};

export default Basics;