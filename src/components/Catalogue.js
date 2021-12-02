import { Fragment, useState } from "react";
import Cake from "./Cake";


const Catalogue = () => {

    //array to hold cake data
    const [cakes, setCakes] = useState([
        {
            flavour: 'Truffle',
            price: 660,
            qty: 12
        },
        {
            flavour: 'Blue Berry',
            price: 800,
            qty: 3
        },
        {
            flavour: 'Vanilla',
            price: 350,
            qty: 5
        }

    ]);

    //buy action 
    const buyCake =(cakeId) =>{
                //make a copy of cake
                const copy_cakes = [...cakes]
                
                //modify the qty
                if(copy_cakes[cakeId].qty > 0){
                    //dec the qty
                    copy_cakes[cakeId].qty -= 1;
                }
                //update the state
                setCakes(copy_cakes);
                
    }

    return (
        <Fragment>
            {
                cakes.map((eachCake, index) =>
                    <Fragment key={index} >
                        <Cake {...eachCake}
                        buyaction = {buyCake.bind(this, index)}/>    
                        {/* buyaction = {()=>buyCake(index)}  another way*/}
                        <br />
                    </Fragment>)
            }
        </Fragment>
    )
}
export default Catalogue;