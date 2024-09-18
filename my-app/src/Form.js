import { useState } from "react"
import Popup from './Popup'


export default function Form() {
    const [inputs, setInputs] = useState({
        name: '',
        phone: '',
        age: '',
        checked: false,
        salary: ''
    })
    const [popup, setPopup] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)

    function handleInputs(e) {
        setInputs({ ...inputs, [e.target.name]: e.target.value })


        // if (e.target.value !== null && e.target.value !== "") {
        //     setIsDisabled(false)

        //     const newUser = { ...user }
        //     if (e.target.name !== "employee") {
        //         newUser[e.target.name] = e.target.value
        //         setUser(newUser)
        //         console.log(newUser)
        //     } else {
        //         newUser[e.target.name] = e.target.checked
        //         setUser(newUser)
        //         console.log(newUser)
        //     }
        // } else {
        //     setIsDisabled(true)
        // }
    }

    const isDisabled = inputs.name === ''
        || inputs.phone === ''
        || inputs.age === ''
        || inputs.salary === ''
        || !inputs.checked

    return (
        <div className="flex-center"
            onClick={_ => {
                if (popup) {
                    setPopup(false)
                }
            }}>
            <form className='formBody' onSubmit={e => {
                e.preventDefault()

                let errors = []
                if (inputs.name.length === 0) {
                    errors.push('Check on Your Name')
                } if (inputs.phone.length !== 11 || isNaN(inputs.phone * 1)) {
                    errors.push('Check on Your Phone Number')
                } if (inputs.age < 18 || inputs.age > 100) {
                    errors.push('Your Age are not allowed')
                }

                setErrorMessage(errors[0])

            }}>
                <h1>Requesting a loan</h1>
                <hr />
                <div className="name">
                    <label>Name:</label>
                    <input type="text" onChange={handleInputs} name='name' value={inputs.name} />
                </div>
                <div className="phone">
                    <label>Phone Number:</label>
                    <input type="tel" onChange={handleInputs} name="phone" placeholder="01023456789" maxLength="11" value={inputs.phone} />
                </div>
                <div className="name">
                    <label>Age:</label>
                    <input type="number" onChange={handleInputs} name="age" value={inputs.age} />
                </div>
                <div className="employee">
                    <label>Are you an employee:</label>
                    <input type="checkbox" onChange={event => {
                        setInputs({ ...inputs, checked: event.target.checked })
                    }} name="employee" checked={inputs.checked} />
                </div>
                <div className="salary">
                    <label>Salary</label>
                    <select name="salary" onChange={handleInputs} value={inputs.salary}>
                        <option value={'-500'}>less than 500$</option>
                        <option value={'500'}>500$</option>
                        <option value={'+500'}>more than 500$</option>
                    </select>
                </div>
                <button className={isDisabled ? 'disabled' : ''} disabled={isDisabled} onClick={_ => setPopup(true)}>Submit</button>
            </form>
            <Popup errorMessage={errorMessage} isVisible={popup} />
        </div>
    )
}