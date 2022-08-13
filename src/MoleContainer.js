import {useState} from 'react'
import Mole from './Mole'

function MoleContainer(props) {
    let [displayMole, setDisplayMole] = useState(false)

    const moleClick = () => {
        if (displayMole) {
            props.setScore(props.score + 1)
            setDisplayMole(false)
        }
    }

    return (
            <Mole displayMole={displayMole} setDisplayMole={setDisplayMole} moleClick={moleClick}/>
    )
}

export default MoleContainer