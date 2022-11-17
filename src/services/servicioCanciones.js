export async function servicioCanciones(){

    const  URI ="https://api.spotify.com/v1/artists/7Ey4PD4MYsKc5I2dolUwbH/top-tracks?market=US";
    const TOKEN ="Bearer BQDmppPP5R3bw25tz7HvJXophswIL8xX0zq6KgyRk1HC23JzGvx-NeajK-48Aq63xDMP5IWg0-XxU6FO1zIHZNp1J_TQVbjAzF-qKlr6x0JXv-Jgznn3O9xsknG01TAtkzDuzZEK1Y_uhysIhiDon_cC7lGhpbVoj95gTcaqAII5";

    const PETICION={
        method: "GET",
        headers: {Authorization:TOKEN}
    };

    let respuesta = await fetch(URI,PETICION);
    let canciones = await respuesta.json();
    console.log(canciones)
    return canciones;

}