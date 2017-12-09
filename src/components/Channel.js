import React from 'react';

const Channel = (props) => {
    const { info } = props;
    return (
        <div className="tile">
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src={info.video_banner} />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image is-48x48">
                                <img src={info.logo} />
                            </figure>
                        </div>
                        <div className="media-content">
                            <p className="title is-4">{info.display_name}</p>
                            <p className="subtitle is-6">{info.followers} followers</p>
                        </div>
                    </div>

                    <div className="content">
                        {info.status}
                        <br/>
                        <time>updated at: {info.updated_at}</time>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Channel;