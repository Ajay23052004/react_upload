import React from 'react';

function Btn(){


return(<a href=""><button className="signup">Sign up</button></a> );

}

function LearnButton(props){
return(
<a href=""><button className="signup">{props.name}</button></a>
);
}



export default Btn
export {LearnButton};