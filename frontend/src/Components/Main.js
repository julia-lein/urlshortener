import React, { useState, useEffect } from 'react';
import LinkForm from './LinkForm';
import getLinks from '../API/getLinks';

function Main() {

    const [ links, setLinks ] = useState([]);

    useEffect(() => {
        getLinks()
            .then(links => {
                setLinks(links);
            })
      }, []);

    return (
        <main className="flex-shrink-0">
        
            <LinkForm links={ links } setLinks={ setLinks }/>

        </main>
    );
}

export default Main;
