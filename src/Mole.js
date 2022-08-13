import {useEffect} from 'react'

function Mole(props){
    useEffect(()=>{
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.setDisplayMole(!props.displayMole)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <img className='mole' src={ props.displayMole ? 'assets/mole.png' : 'assets/molehill.png' } alt='placeholder' onClick={props.moleClick}/>
    )
}

export default Mole