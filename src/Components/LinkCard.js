import React from 'react';


function LinkCard({ link, photo, title, description }) {
    return (
        <div className="container col-xxl-8 px-4 py-3 link-card">
                <div>
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-3 " action="">
                        <div className="col-lg-6">
                            <img name="screenshot" src={ photo } width="100%" alt="" />
                        </div>

                        <div className="col-10 col-sm-8 col-lg-6">
                            <p name="title">{ title }</p>
                            <p name="link"><a href={ link } target="_blank">{ link }</a></p>
                            <p name="description">{ description }</p>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default LinkCard;
