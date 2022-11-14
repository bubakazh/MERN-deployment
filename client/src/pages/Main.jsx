import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'


const Main = () => {

    const [ pirateList, setPirateList ] = useState([])
    const [errors, setErrors] = useState([]);
    const [ flip, setFlip ] = useState(false)

    const styles = {
        img:{
            height: 200,
            width: 320
        },
        single:{
            display:'flex',
            justifyContent:'space-around',
            alignItems:'center'
        }
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/pirates")
        .then( res => {
            // console.log(res.data)
            setPirateList(res.data);
        })
        .catch( errors => console.log(errors.response.data.errors))
    }, [flip])

    const deletePirate = (pirate_id) => {
        axios.delete(`http://localhost:8000/api/pirates/delete/${pirate_id}`)
            .then( res => {
                console.log(res.data)
                setFlip(!flip)
            })
            .catch(errors => console.log(errors))
    }

    function comparePirates(a, b){
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0
    }


    return (
        <div style = {{padding:32}}>
            <div className = "header" style = {{display: 'flex', alignItems: 'center', justifyContent:'space-between'}}>
                <h1>Pirate Crew</h1>
                <Link to = "/pirate/new">Add Pirate</Link>
            </div>
            <div className = "list">
                <ul style = {{listStyle: 'none'}}>
                    {
                        pirateList.sort(comparePirates).map((pirate) => {
                            return(
                                <li style = {styles.single}>
                                    <div>
                                        <img style = {styles.img} src={`${pirate.image}`} alt="pirate pic" />
                                    </div>
                                    <div style = {{display:'flex', flexDirection:'column', alignItems:'center',justifyContent:'center'}}>
                                        <h3>{pirate.name}</h3>
                                        <div>
                                            <Link style = {{marginRight:10}} to = {`/pirate/${pirate._id}`}>VIEW</Link>
                                            <button onClick= {() => deletePirate(pirate._id)}>WALK THE PLANK</button>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                        
                    }
                </ul>
            </div>
        </div>
    )
}

export default Main