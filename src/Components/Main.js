import React from 'react';

function Main() {
    return (
        <main className="flex-shrink-0">

            <div className="container col-xxl-8 px-4 py-5">
                <div>
                    <form className="form-floating row flex-lg-row g-5 py-5" action="">
                        <div className="col-lg-12">
                            <div className="form-floating mb-3">
                                <input name="link" type="text" className="form-control" id="inputLink" value="https://google.com" required />
                                <label for="inputLink">Link</label>
                            </div>
{/*                             <div className="form-floating mb-3">
                                <input name="title" type="text" className="form-control is-invalid" id="inputTitle" value="Titel" required />
                                <label for="inputTitle">Titel</label>
                            </div>
                            <div className="form-floating">
                                <textarea name="description" className="form-control" value="Beschreibung" id="inputDescription" required></textarea>
                                <label for="inputDescription">Beschreibung</label>
                            </div> */}
                        </div>
                        
{/*                         <div className="col-lg-6">
                            <div className="input-group ">
                                <input type="file" className="form-control" id="inputFile" required />
                                <label className="input-group-text" for="inputFile">Upload</label>
                            </div>
                        </div> */}

                        <div className="text-center mt-4"><button className="btn btn-lg px-4 fill">Shorten</button></div>
                        
                    </form>
                </div>
            </div>
        

            <div className="container col-xxl-8 px-4 py-5">
                <div>
                    <form className="row flex-lg-row-reverse align-items-center g-5 py-5" action="">
                        <div className="col-lg-6">
                            <label for="screenshot"></label>
                            <img name="screenshot" src="./img/instagram.png" width="300" alt="" />
                        </div>

                        <div className="col-10 col-sm-8 col-lg-6">
                            <label for="title">Titel</label>
                            <p name="title">Titel</p>
                            <label for="link"></label>
                            <p name="link"><a href="">https://getbootstrap.com/docs/5.1/examples/heroes/</a></p>
                            <label for="description"></label>
                            <p name="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo similique dolorem commodi nesciunt delectus numquam at? Id, molestias architecto! Voluptatem iusto sequi soluta animi. Provident quos molestias quidem ea enim?</p>
                        </div>
                    </form>
                </div>
            </div>
     

        </main>
    )
}

export default Main;
