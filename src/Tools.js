import images from './Images/couple.jpg'
import './Style.css';
function Tool() {
    return (
        
      <div className='Travel'>
        <center>
        <h1 >Travelling</h1></center>
        <p>If you have ever ridden a bike, you would know that the freedom it allows is unparalleled.</p>
         <p>The wind in your face, the sun on your back and the endless road — is something experienced by only those who dare to ride. </p>
         <p>Winters are the best time for road trips as you get to explore snowy hills, highways and plains. </p>
         <p>The feeling of cold mountain air running through your hair is refreshing.</p>
        
         <img src={images} alt="couple"/>

      </div>
    );
}

export default Tool