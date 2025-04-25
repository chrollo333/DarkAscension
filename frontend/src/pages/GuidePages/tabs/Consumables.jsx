import React from 'react'

const Consumables = ({ spec }) => {

    return (
        <>
            <h2>5. {spec.charAt(0).toUpperCase() + spec.slice(1)} enchants and consumables</h2>
            <p>These will also be generalized since both specializations share the same priorities.
                <br></br> This also means none of this applies to everyone the same way and should be taken with a grain of salt!
                ALWAYS sim yourself for any gear upgrade.</p>
            <h3>Enchants</h3>
            <p>Weapon: <a href="https://www.wowhead.com/item=223784/enchant-weapon-authority-of-the-depths">Enchant Weapon - Authority of the Depths
            </a> for raiding (ST) <br></br> <a href="https://www.wowhead.com/item=223781/enchant-weapon-authority-of-radiant-power"></a> for M+ (AoE)</p>
            <p>Cloak: <a href="https://www.wowhead.com/item=223731/enchant-cloak-chant-of-winged-grace"></a></p>
            <p>Chest: <a href="https://www.wowhead.com/item=223692/enchant-chest-crystalline-radiance"></a></p>
            <p>Bracers: <a href="https://www.wowhead.com/item=223719/enchant-bracer-chant-of-armored-leech"></a></p>
            <p>Legs: <a href="https://www.wowhead.com/item=222893/sunset-spellthread"></a></p>
            <p>Boots: <a href="https://www.wowhead.com/item=223656/enchant-boots-defenders-march"></a></p>
            <p>Rings: <a href="https://www.wowhead.com/item=223674/enchant-ring-radiant-haste"></a></p>
            <h3>Consumables</h3>
            <p>Food: <a href="https://www.wowhead.com/item=222733/feast-of-the-midnight-masquerade"></a></p>
            <p>Flask: <a href="https://www.wowhead.com/item=212283/flask-of-alchemical-chaos"></a></p>
            <p>Prepot: <a href="https://www.wowhead.com/item=212265/tempered-potion"></a></p>
            <p>Health potion: <a href="https://www.wowhead.com/item=211880/algari-healing-potion"></a></p>
            <p>Weapon buff: <a href="https://www.wowhead.com/item=224105/algari-mana-oil"></a></p>
            <p>Augment rune: <a href="https://www.wowhead.com/item=224572/crystallized-augment-rune"></a></p>

        </>
    );
};

export default Consumables;