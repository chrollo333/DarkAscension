import React from 'react'

const Stats = ({ spec }) => {

    return (
        <>
            <h2>4. {spec.charAt(0).toUpperCase() + spec.slice(1)} stats</h2>
            <p>Both specializations share the same stat priorities.<br></br>
                Slight differences could come later when we can get enough haste for a 4th Void Blast in Voidweaver's rift windows. This also means you mostly strive to get enough haste to cast 3 in one window and every point after that gets devalued.<br></br>
                At the end of the day, you should always <span style={{ fontWeight: "bold" }}>prioritize simming your gear instead of going by stat priorities!</span></p>
            <p style={{ textAlign: "center" }}>1. Intellect<br></br>
                2. Haste<br></br>
                3. Mastery<br></br>
                4. Crit<br></br>
                5. Versatility</p>
            <p>This means you are free to equip more or less the same gear for both specs without massive downsides.</p>

        </>
    );
};

export default Stats;