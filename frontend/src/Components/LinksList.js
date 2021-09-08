import React from 'react';
import LinkCard from './LinkCard';
import env from "react-dotenv";

function LinksList({ links }) {
    return (
        <div>
            {
                links.map((link, i) =>
                    {
                        return(
                            <LinkCard key={ i }
                                link={ `${env.URL}:${env.B_PORT}/links/${link.shortLink}` }
                                photo={ link.screenshot }
                                title={ link.title }
                                description={ link.description }
                            />
                        )
                    }).reverse()
            }
        </div>
    )
}

export default LinksList
