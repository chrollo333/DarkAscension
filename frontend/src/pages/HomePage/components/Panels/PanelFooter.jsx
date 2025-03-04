import React from 'react';
import Panel from "./Panel";
import guidesImage from "../../../../assets/panels/shadow_panel.jpg";
import newsImage from "../../../../assets/panels/wowhead.jpg";
import discussionImage from "../../../../assets/panels/discussion.jpg";

const panelData = {
    guides: {
        image: guidesImage,
        title: "GUIDES",
        description: "Learn how to play and optimize both Archon and Voidweaver specializations.",
        link: "/guides"
    },
    news: {
        image: newsImage,
        title: "NEWS",
        description: "Stay up to date with the latest news and updates not only Shadow Priest related.",
        link: "/news"
    },
    discussion: {
        image: discussionImage,
        title: "DISCUSSION",
        description: "Join the conversation and discuss anything Shadow Priest or non-Shadow Priest related.",
        link: "/discussion"
    }
};
const PanelFooter = () => {
    //Panel render


    return (
        <div className="footer-panels">
            {Object.keys(panelData).map((key) => (
                <Panel
                    key={key} //unique key for each item
                    image={panelData[key].image}
                    title={panelData[key].title}
                    description={panelData[key].description}
                    link={panelData[key].link}
                />
            ))}
        </div>
    );
};

export default PanelFooter;
