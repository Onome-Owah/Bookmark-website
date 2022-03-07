import React from 'react'
import { useState } from 'react'

const Header = () => {
  // let name = 'Temi'

  // const handle = (age) =>{
  //     name = 'Damilola'
  //     // console.log(name)
  //     console.log(name + ' is a guy and He is ' + age + ' years old');

  // console.log( useState('hello world') );
  //    const [name,setName] = useState('Temi')
  //    let trainees = ['papi','eze','akeem','zion']
  //    let pick = Math.floor(Math.random() * 4)
  //    let picker = trainees[pick]
  //    console.log(picker);
  //     // }
  //     let refresh = ()=>{
  //         if (name === 'Temi') {
  //           setName(picker)
  //         } else if (name === picker) {
  //           setName('Eggy')
  //         } else {
  //           setName('Temi')
  //         }
  //     }
  const [person, setPerson] = useState(
    { name: 'Eggys', age: 40, message: 'na the class' },
  )

  let refresh = () => {
      if(person.name === 'Eggys' && person.age === 40 && person.message === 'na the class'      ){
              setPerson({
                name: 'Temi',
                age: 80,
                message: 'we go dey here till 7PM',
              })

          

      }else{
              setPerson({
                name: 'Eggys',
                age: 40,
                message: 'na the class',
              })

      }

  }

  return (
    <div className='App'>
        <h4>header</h4>
      <h2> {person.name} </h2>
      <h2> {person.age} </h2>
      <h2> {person.message} </h2>
      <button onClick={refresh} style={ {backgroundColor:'blue', color:'white'} }>change person</button>
      {/* <h1> {name} </h1>

    <button   onClick={refresh}> click am </button> */}
    </div>
  )
}

export default Header
