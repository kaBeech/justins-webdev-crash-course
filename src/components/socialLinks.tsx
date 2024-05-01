import React from 'react';

interface SocialLinksProps {
    class: string;
}

const SocialLinks = (props: SocialLinksProps) => {
    return (
        <div className={props.class + " " + "flex gap2 wrap"}>
            {/* These icons are made using a Nerd Font */}
            <a href="https://www.linkedin.com/in/justinjamesshort/"></a>
            <a href="http://soundcloud.com/holdyourcomposer"></a>
            <a href="https://www.instagram.com/holdyourcomposer/"></a>
        </div>
    );
}

export default SocialLinks;
