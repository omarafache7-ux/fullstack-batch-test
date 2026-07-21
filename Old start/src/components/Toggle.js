import {useState} from "react";
import Img from "../images.jpg";
const Toggle = () =>{
    const [isVisible,setIsVisible] = useState(true);

    const toggleVisibility = ()=>{
        setIsVisible(!isVisible)
    };

    return(
     <div>
        <h2>UseState show/hide example</h2>
        <button onClick={toggleVisibility}>
            {
                isVisible? "Hide content":"Show Content"
            }
        </button>
        {
            isVisible && <div><br></br> This Div content show/hide on the useState<br></br> <h2>Snake!!</h2>
            <img  src={Img}></img>
            </div>
        }
     </div>
    );
};

export default Toggle;