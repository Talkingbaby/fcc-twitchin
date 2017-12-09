import React from 'react';
import Channel from './Channel';

const ChannelSection = (props) => {
    return (
        <section className="column">
            <div className="tile is-ancestor">
                <Channel info={props.info}/>
            </div>
        </section>
    );
}

export default ChannelSection;