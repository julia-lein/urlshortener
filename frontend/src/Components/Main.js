import React, { useState, useEffect } from 'react';
import LinkForm from './LinkForm';
import LinkCard from './LinkCard';
import getLinks from '../API/getLinks'

function Main() {

    const [ links, setLinks ] = useState([]);

    useEffect(() => {
        getLinks()
            .then(links => {
                setLinks(links);
            })
      }, [links]);

    return (
        <main className="flex-shrink-0">

            <LinkForm />

            {
                links.map((link, i) =>
                    {
                        return(
                            <LinkCard key={ i }
                                link={ "http://localhost:5555/links/" + link.shortLink }
                                photo={ link.screenshot }
                                title={ link.title }
                                description={ link.description }
                            />
                        )
                    }).reverse()
            }

        </main>
    );
}

export default Main;
