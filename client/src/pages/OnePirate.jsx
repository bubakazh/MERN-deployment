import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios'


const OnePirate = () => {

    const {pirate_id} = useParams();
    const [onePirate, setOnePirate] = useState(null)
    const [patch, setPatch] = useState(true);
    const [hook, setHook] = useState(true);
    const [peg, setPeg] = useState(true);
    const [ flip, setFlip ] = useState(false)


    useEffect(() => {
        axios.get(`http://localhost:8000/api/pirates/${pirate_id}`)
            .then(res => setOnePirate(res.data))
            .catch(errors => console.log(errors))
    }, [flip])

    // const updatePatch = (e) =>{
    //     e.preventDefault()
    //     let updatedPatch = {
    //         "patch" : patch
    //     }
    //     axios.patch(`http://localhost:8000/api/pirates/update/${pirate_id}`, updatedPatch)
    //         .then(res=>{
    //             console.log(res.data)
    //             setFlip(!flip)
    //         })
    //         .catch(errors=> console.log(errors))
    // }
    // const updateHook = (e)
    // const updatePeg = (e)

    const styles = {
        p:{
            display:'flex'
        },
        img:{
            width: 320,
            height: 200
        }
    }

    return (
        <div>
            {
                (onePirate) ?
                <>
                    <div className = "header" style = {{textAlign:'center'}}>
                        <h1 > {onePirate.name} </h1>
                    </div>
                    <div style = {{display:'flex', justifyContent:'space-around'}}>
                        <div className = "picPhrase">
                            <img style = {styles.img} src={`${onePirate.image}`} alt="pirate pic" />
                            <p>"{onePirate.phrase}"</p>
                        </div>
                        <div className = "about">
                            <h3>About</h3>
                            <p>Position: {onePirate.position}</p>
                            <p>Treasures: {onePirate.chests}</p>
                            <p style = {styles.p}>
                                Eye Patch: {(onePirate.patch) ? "Yes" : "No"}
                                {/* <form onSubmit={updatePatch}>
                                    <input type="submit" value="" />
                                </form> */}
                            </p>
                            <p style = {styles.p}>
                                Hook Hand: {(onePirate.hook) ? "Yes" : "No"}
                                {/* <form onSubmit="">
                                    <input type="submit" value="" />
                                </form> */}
                            </p>
                            <p style = {styles.p}>
                                Peg Leg: {(onePirate.peg) ? "Yes" : "No"}
                                {/* <form onSubmit="">
                                    <input type="submit" value="" />
                                </form> */}
                            </p>
                        </div>
                    </div> 
                </>: <h1>Loading...</h1>
            }
                
        </div>

  )
}

export default OnePirate