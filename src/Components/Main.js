import React, { useState, useEffect } from 'react';
import LinkForm from './LinkForm';
import LinkCard from './LinkCard';
import photo1 from '../img/css-tricks.png';
import photo2 from '../img/react.png';


function Main() {

    const [ links, setLinks ] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5555/links",
        {
            //mode: 'cors',
            method: "GET",
            headers:
            {
                'Content-Type': 'application/json'
            }
        })
        .then(response =>
        {
            return response.json();
        })
        .then(data =>
        {
            setLinks(data);
        })
        .catch((err) =>
        {
            console.log(err);
        });
      }, []);

    return (
        <main className="flex-shrink-0">

            <LinkForm />

            {
                links.map((link, i) =>
                    {
                        return(
                            <LinkCard key={ i }
                                link={ link.link }
                                photo={ link.screenshot }
                                title={ link.title }
                                description={ link.description }
                            />
                        )
                    })
            }

        </main>
    );
}

export default Main;
