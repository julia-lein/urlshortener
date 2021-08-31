import React, { useState } from 'react';

function LinkForm() {
    const [ inputUrl, setInputUrl ] = useState("");

    const createId = () =>
    {
      return Math.random().toString(16).substr(2, 8);
    }
  
    const handleInputUrl = (e) =>
    {
        setInputUrl(e.target.value);
    }

    const addUrl = () =>
    {
      const newUrl =
      {
        id: createId(),
        link: inputUrl
      }
      
      let urls = JSON.parse(localStorage.getItem('urls')) || [];
      urls.push(newUrl);
      localStorage.setItem('urls', JSON.stringify(urls));
    
      setInputUrl("");
    }

    return (
        <div className="container col-xxl-8 px-4 py-3">
                <div>
                    <form className="form-floating row flex-lg-row g-5 py-5" action="">
                        <div className="col-lg-12">
                            <div className="form-floating mb-3">
                                <input name="link" type="text" className="form-control linkURL" id="inputLink" value={ inputUrl } required onChange={ handleInputUrl }/>
                                <label for="inputLink">Shorten your link</label>
                            </div>
                        </div>
                        
                        <div className="text-center mt-4"><button className="btn btn-lg px-4 fill" onClick={ addUrl }>Shorten</button></div>
                        
                    </form>
                </div>
        </div>
    )
}

export default LinkForm;
