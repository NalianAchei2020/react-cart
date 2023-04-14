import React, { useEffect } from 'react';
import data from './data'
import Header from '../components/header';
import { useState } from 'react';
import '../App.css';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';



const Home = () => { 
    const product = data;
    const [cart, setcart] = useState([]);
  const add = (itemId)=>{
    const exist = cart.find((x)=>x.id === itemId.id);
   if(exist){
      const newItem = cart.map((x)=>
      x.id === itemId.id? {...exist, qty:exist.qty + 1}:x
      );
      setcart(newItem)
      localStorage.setItem('cart', JSON.stringify(newItem))
      console.log(cart);
    console.log(cart.length)
    }
    else{
      const newItem = [...cart, {...itemId, qty:1}];
      setcart(newItem)
      localStorage.setItem('cart', JSON.stringify(newItem))
    }
    console.log(cart);
    console.log(cart.length)
    }  
    function remove(itemId){
        const exist = cart.find((x)=> x.id === itemId.id);
        if(exist.qty === 1){
            const newItem =  cart.filter((x)=> x.id !== itemId.id);
            setcart(newItem);
        }
        else{
            const newItem = cart.map((x)=> x.id === itemId.id?
            {...exist, qty:exist.qty - 1}:x);
            setcart(newItem);
        }
    }
 
    useEffect(()=>{
        setcart(localStorage.getItem('cart')?
        JSON.parse(localStorage.getItem('cart')):
        [])
        }, [])

/*const [quanttity, setquantity] = useState();
Array.from(cart).forEach(itemId =>{
    const item = cart.find((x)=> x.id === itemId.id);
    add({...item, qty:Number(quanttity)})
*/
    return (
        <div> 
 <Header cartcount={cart.length}/>                                
<div className='main'>
{product.map((item)=>{
  return(
 <div className='container' key={item.id}>
 <img src={item.image} alt='computer' />
 <p>{item.id}</p>
 <p>{item.name}</p>
 <div className='cart-price'>
 <p><IconButton onClick={()=>add(item)}>
 < AddShoppingCartIcon/>
  </IconButton></p>
 <h2>${item.price}</h2>
 </div>
 </div>)
})}
     </div><br/><br/><br/>
     <div className='table'>
     {cart.length>0?
     (
     <table>
        <tbody>
                <tr className='thead'>
                    <th>Item</th>
                    <th>price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                    <th>Remove</th>
                </tr>
                {cart.map((x)=>{
                    return(
                        <tr className='tbody'>
                            <td><img src={x.image} alt='item'/><br/>
                            {x.name}
                            </td>
                            <td>{x.price}</td>
                            <td>
                            <select>
                                {
                                    [...Array(x.countInStock).keys()].map((z)=> x.qty === z + 1?
                                    <option selected value={z+1}>{z+1}</option>:
                                    <option value={z+1}>{z+1}</option>
                 ) }
                            </select>
                            </td>
                            <td>
                           {}     
                          {cart.reduce((a, c)=> a + c.qty, 0)} Items:
                          {cart.reduce((a,c)=> a + c.price*c.qty, 0)}
                            </td>
                            <td>
             <IconButton size="large" aria-label="show 4 new mails" color="inherit" onClick={()=>remove(x)}>
                <DeleteIcon />
            </IconButton>
                            </td>
                        </tr>
                    )
                })}
        </tbody>
    </table>
     ):
     (<>
     <p>Cart is empty</p>
     </>)
    }
    </div>
        </div>
    );
}

export default Home;
