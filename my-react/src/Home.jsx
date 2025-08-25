import React, { useState } from 'react'

const Home = ({fruitlists,colorlists}) => {


  //Counter App
  const[count,setCount]=useState(1);
  const min=1;
  const max=100;
  //hide or show
  const [isShow,setIsShow]=useState(false);
  //color 
  const[color,setColor]=useState('blue');
  ////color change use input
  const[colorChange,setColorChange]= useState('green'); 

    return (
    <div>
      <h1>Counter App on git</h1>
            <p>Count: {count}</p>
            <button onClick={()=>setCount(count+1)} disabled={count===max}>increase</button>
            <button onClick={()=>setCount(count-1)}  disabled={count===min}>decrease</button>
            <button onClick={()=>setCount(0)}>Reset</button>

      <h1>li and props concept</h1>
            <ol>
            {fruitlists.map((fruits,i)=>(
            <li key={i}  style={{color: i%2===0 ? 'red' : 'gray'}}  >{fruits}</li>
            ))}</ol>

     <h1>Hide or Show content use button</h1>
            <button onClick={()=>setIsShow(!isShow)}> {isShow? 'Hide' : 'Show'} </button>
            {isShow && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium mollitia aliquam ad laborum! Sapiente necessitatibus magnam reprehenderit, quod possimus odit quisquam vitae consequuntur, blanditiis earum amet nesciunt consequatur, laboriosam quos!</p>}

      <h1>color change use array concept</h1>

            {colorlists.map((colors, index) => (
              <div key={index}  style={{background: color}}>
                {colors}
              </div>
            ))}
           <button onClick={()=>setColor('red')}>Red</button> &nbsp;
           <button onClick={() => {
            const randomIndex = Math.floor(Math.random() * colorlists.length);
            setColor(colorlists[randomIndex]);
            }}>Random Color</button>

     <h1 style={{color: colorChange}}>Color change automatically</h1>
            <input type="color" value={colorChange} onChange={(e)=>setColorChange(e.target.value)}/>
            <hr />


         </div>
  )
}

export default Home
