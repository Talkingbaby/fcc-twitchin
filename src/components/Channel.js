import React from 'react';

const Channel = (props) => {
    return (
        <div className="tile">
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src={props.video_banner} />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image is-48x48">
                                <img src={props.logo} />
                            </figure>
                        </div>
                        <div className="media-content">
                            <p className="title is-4">{props.display_name}</p>
                            <p className="subtitle is-6">{props.followers} followers</p>
                        </div>
                    </div>

                    <div className="content">
                        {props.status}
                        <br/>
                        <time datetime="2016-1-1">updated at: {props.updated_at}</time>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Channel;