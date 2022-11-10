export function Integrantes(){

    let integrantes = [
        {
            nombre:"Steven Tyler",
            instrumento:"Vocalista",
            edad:74,
            fotografia:"https://firebasestorage.googleapis.com/v0/b/cineal.appspot.com/o/Areosmith%2Fsteven.jpg?alt=media&token=0517a2e1-44c4-4644-8f5f-e894426f63f5"
        },
        {
            nombre:"Joe Perry",
            instrumento:"Guitarrista",
            edad:72,
            fotografia:"https://firebasestorage.googleapis.com/v0/b/cineal.appspot.com/o/Areosmith%2Fjoe.jpg?alt=media&token=364e39e3-b619-4f5c-8fcf-4d5bf5dc1311"
        },
        {
            nombre:"Brad Whitford",
            instrumento:"Guitarrista",
            edad:70,
            fotografia:"https://firebasestorage.googleapis.com/v0/b/cineal.appspot.com/o/Areosmith%2Fgetty.jpg?alt=media&token=bc558dd9-eb8d-4e48-a1cb-520b28c072f0"
        },
        {
            nombre:"Joey Kramer",
            instrumento:"Baterista",
            edad:72,
            fotografia:"https://firebasestorage.googleapis.com/v0/b/cineal.appspot.com/o/Areosmith%2Fjoeykramer.jpg?alt=media&token=a7457e98-cc77-41b8-acba-839c68099911"
        }
    ];

    return(
        <>
            <div className="row row-cols-1 row-cols-md-2 g-0 mt-5">
             
             {
                integrantes.map(function(integrante) {
                    return(
                        <>
                            <diV className="col mt-3">
                                <div className="card h-100">
                                    <img src={integrante.fotografia} alt="foto" className="img-fluid w-100 h-100"/>
                                    <h1>{integrante.nombre}</h1>
                                    <h2>{integrante.edad + " Años"}</h2>
                                    <h2>{integrante.instrumento}</h2>

                                </div>
                            </diV>
                        </>
                    )
                })
             }

            </div> 
        </>
    )
}