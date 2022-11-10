import './Home.css'
import { Footer } from '../Footer/Footer.js'
export function Home(){
return(
<>
    <img src="https://firebasestorage.googleapis.com/v0/b/cineal.appspot.com/o/Areosmith%2Fbanner-2017-.jpg?alt=media&token=ae38524a-4d4e-41e0-b1db-b53ac88876ec" alt="banner" className="w-100 img-fluid"/>

    <section>
        <div className="container">
            <div className="row">
                <div className="col-12">
                <h1>STEVEN TYLERS PERSONAL MESSAGE ABOUT THE AEROVEDERCI TOUR CANCELATION</h1>
                <p>
                        Unfortunately, due to unexpected medical issues, lead singer, Steven Tyler, is seeking immediate care and has been advised by his doctors       that he cannot travel or perform at this time. Therefore, the last four shows of the South American tour will be canceled. 
                </p>
                       <li> Wednesday, September 27- Curitiba, Brazil</li>
                       <li> Saturday, September 30- Santiago, Chile </li> 
                        <li> Tuesday, October 3- Rosario, Argentina</li> 
                        <li> Saturday, October 7-Monterrey, Mexico</li>
                         

                       
                
                <hr/>
                </div>
            </div>
                <div className="row">
                   <div className="col-12 col-md-8">
                        <img src="https://firebasestorage.googleapis.com/v0/b/cineal.appspot.com/o/Areosmith%2Fsteven.jpg?alt=media&token=0517a2e1-44c4-4644-8f5f-e894426f63f5" className="img-fluid w-100" alt="live"/>
                    </div>
                    <div className="col-12 col-md-4 align-self-center">
                        <p>
                        Steven is expected to make a full recovery. With proper rest and treatment he will be back on his feet soon rocking the world. 

                        "To everybody in South America....Brazil, Chile, Argentina and Mexico... I'm very sorry and feel like I've let you down... I won't be able to       continue                        the              last four shows of this tour. I flew back to the US on doctor's orders last night after the show in S�o Paulo.    Please not to worry... I                     am not in a life                threatening condition, but I need to deal with this right away, and get some rest    and medical care immediately in order to                   sustain and maintain my future           performances... I promise I'll be back...unfortunately,        health does not wait and it's something even I can't                schedule around our shows... As they say, "We          humans make plans, and God     laughs..." I love you all and will be back with you soon... -Steven                   Tyler

                        Thank you all for your understanding and support.  

                        Aerosmith
                        </p>
                    </div> 
                </div>
        </div>
    </section>
    <Footer></Footer>
</>

)
}