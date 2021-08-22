import { useState } from 'react'; 
import useInterval  from '../hooks/useInterval'; 

const DelayedContentComponent = () => {
   const [seconds, setSeconds] = useState(0);
   
   // repeat the function each 1000ms
   useInterval(() => {
     setSeconds(1 + seconds);
   }, 1000);
   
   return (
       <p>Rendering since {seconds} seconds</p>
   );
};

export { DelayedContentComponent }