import { Fragment, useState } from "react";

const Cake = (props) => {
    /*
    //create an object
    const [myCake, setMyCake] = useState({
        flavour: 'Truffle',
        price: 660,
        qty: 12
    })       */

    //buy action
    const buy = () => {
        // //reduce the qty by 1
        // if (myCake.qty > 0){

        //         // make a copy of cake
        //         const copy_cake = {...myCake};
        //         //modify the qty
        //         copy_cake.qty -= 1;
        //         //update
        //         setMyCake(copy_cake);

        // }
    }

    return (
        <Fragment>
            This is my Cake   <br />
            Flavour : {props.flavour}    <br />
            Price : {props.price}     <br />
            Qty :  {props.qty}   <br />
            <button onClick={props.buyaction}>Buy</button>
        </Fragment>
    )
}
export default Cake;