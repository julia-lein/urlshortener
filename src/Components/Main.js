import React from 'react';
import LinkForm from './LinkForm';
import LinkCard from './LinkCard';
import photo1 from '../img/css-tricks.png';
import photo2 from '../img/react.png';


function Main() {
    let urls = JSON.parse(localStorage.getItem('urls')) || [];

    return (
        <main className="flex-shrink-0">

            <LinkForm />

{/*             {
                urls.map(url =>
                    {
                        return (
                            <LinkCard 
                            link={url}
                            photo={ photo1 }
                        />
                        )
                    })
            } */}
            <LinkCard 
                link="https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
                photo={ photo1 }
            />
            <LinkCard
                link="https://reactjs.org/" 
                photo={ photo2 }
            />
       
        </main>
    )
}

export default Main;
