import React from 'react';


function LinkCard({ link, photo }) {
    return (
        <div className="container col-xxl-8 px-4 py-3 link-card">
                <div>
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-3 " action="">
                        <div className="col-lg-6">
                            <img name="screenshot" src={ photo } width="100%" alt="" />
                        </div>

                        <div className="col-10 col-sm-8 col-lg-6">
                            <p name="title">Titel</p>
                            <p name="link"><a href={ link } target="_blank">{ link }</a></p>
                            <p name="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo similique dolorem commodi nesciunt delectus numquam at? Id, molestias architecto! Voluptatem iusto sequi soluta animi. Provident quos molestias quidem ea enim?</p>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default LinkCard;
