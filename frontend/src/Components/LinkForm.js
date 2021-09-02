import React, { useState } from 'react';
import postLink from '../API/postLink';

function LinkForm() {
    const [ inputUrl, setInputUrl ] = useState("");
    const [ inputTitle, setInputTitle ] = useState("");
    const [ inputDesc, setInputDesc ] = useState("");

    const handleInputUrl = (e) =>
    {
        setInputUrl(e.target.value);
    }

    const handleInputTitle = (e) =>
    {
        setInputTitle(e.target.value);
    }

    const handleInputDesc = (e) =>
    {
        setInputDesc(e.target.value);
    }

    const addUrl = () =>
    {
      const newUrl =
      {
        link: inputUrl,
        screenshot: "https://cdn.pixabay.com/photo/2020/04/30/15/34/code-5113374_960_720.jpg",
        title: inputTitle,
        description: inputDesc
      }
      console.log(newUrl);

      postLink(newUrl);

      setInputUrl("");
      setInputTitle("");
      setInputDesc("");
    }

    return (
        <div className="container col-xxl-8 px-4 py-3">
                <div>
                    <form className="form-floating row flex-lg-row g-5 py-5" action="">
                        <div className="col-lg-12">
                            <div className="form-floating mb-2">
                                <input name="link" type="text" className="form-control linkURL" id="inputLink" value={ inputUrl } required onChange={ handleInputUrl }/>
                                <label htmlFor="inputLink">Shorten your link</label>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="form-floating mb-2">
                                <input name="title" type="text" className="form-control linkURL" id="inputTitle" value={ inputTitle } required onChange={ handleInputTitle } />
                                <label htmlFor="inputTitle">Title</label>
                            </div>
                            <div className="form-floating mb-2">
                                <textarea name="description" className="form-control linkDesc" value={ inputDesc } id="inputDescription" required onChange={ handleInputDesc }></textarea>
                                <label htmlFor="inputDescription">Description</label>
                            </div>
                        </div>

                        <div class="col-lg-6">
                            <div class="input-group mb-3">
                                <input type="file" class="form-control linkURL" id="inputFile" required />
                                <label class="input-group-text linkURL" for="inputFile">Upload</label>
                            </div>
                        </div>
                        
                        <div className="text-center mt-4"><button className="btn btn-lg px-4 fill" onClick={ addUrl }>Shorten</button></div>
                        
                    </form>
                </div>
        </div>
    )
}

export default LinkForm;
