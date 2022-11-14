import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'



const AddPirate = () => {

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [chests, setChests] = useState(0);
    const [phrase, setPhrase] = useState("");
    const [position, setPosition] = useState(null);
    const [patch, setPatch] = useState(true);
    const [hook, setHook] = useState(true);
    const [peg, setPeg] = useState(true);
    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();

    const createPirate = (e) => {
        e.preventDefault()
        if (name.trim().length === 0){
            setName("");
        }
        let body = {
            "name" : name.trim(),
            "image" : image,
            "chests" : chests,
            "phrase" : phrase.trim(),
            "position" : position,
            "patch" : patch,
            "hook" : hook,
            "peg" : peg
        }
        // ! MAKE AN AXIOS REQUEST TO MY API
        axios.post("http://localhost:8000/api/pirates", body)
            .then ( res => {
                console.log(res.data)
                // setName("")
                navigate(`/pirate/${res.data._id}`);

            })
            .catch ( err => {
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })            
            // .catch ( errors => console.log(errors))
        // ! not https. WE ARE NOT SET UP TO RECEIVE SECURE REQUESTS YET.
    }


    return (
        <div>
            <div>
                <h1>Add Pirate</h1>
                <Link to = "/pirates">Crew Board</Link>
            </div>
            <div>
                <form onSubmit={createPirate}>
                    <p>
                        Pirate name:
                        <input type="text" value = {name} onChange = {e => setName(e.target.value)}/>
                    </p>
                    <p>
                        Image URL:
                        <input type="text" value = {image} onChange = {e => setImage(e.target.value)}/>
                    </p>
                    <p>
                        Treasure chests:
                        <input type="number" min = {0} value = {chests} onChange = {e => setChests(e.target.value)}/>
                    </p>
                    <p>
                        Pirate phrase:
                        <input type="text" value = {phrase} onChange = {e => setPhrase(e.target.value)}/>
                    </p>
                    <p>
                        Position:
                        <select name="position" id="position" value = {position} onChange = {e => setPosition(e.target.value)}>
                            <option disabled hidden selected value="Choose One">Choose One</option>
                            <option value="Captain">Captain</option>
                            <option value="First Mate">First Mate</option>
                            <option value="Quarter Master">Quarter Master</option>
                            <option value="Boatswain">Boatswain</option>
                            <option value="Powder Monkey">Powder Monkey</option>
                        </select>
                    </p>
                    <p>
                        Eye Patch:
                        <input type="checkbox" checked = {patch} onChange = {(e) => setPatch(e.target.checked)}/>
                    </p>
                    <p>
                        Hook Hand:
                        <input type="checkbox" checked = {hook} onChange = {(e) => setHook(e.target.checked)}/>
                    </p>
                    <p>
                        Peg Leg:
                        <input type="checkbox" checked = {peg} onChange = {(e) => setPeg(e.target.checked)}/>
                    </p>
                    {
                        (name.trim().length < 1 || image.length === 0 || chests <= 0 || phrase.length === 0 || position === null) ?
                        <input disabled type="submit" value = "Add Pirate" /> :
                        <input type="submit" value = "Add Pirate" />
                    }
                </form>
                {
                errors.map((error) => <p> { error } </p>)
                }
            </div>
        </div>
    )
}

export default AddPirate