import '../../font.css'
import './ChoiceButton.css'


interface SingleChoiceButtonProps{
    answer : string
    handleClick : ()=>void
    clicked : boolean
}

export default function ChoiceButton({answer,handleClick,clicked}:SingleChoiceButtonProps){
    return(
        <div className={'margin'}>
            <button key={answer + (clicked?'a':'b')} type="button" className={`nes-btn ${clicked && 'is-success'} betterRead`} onClick={handleClick}>{answer}</button>
        </div>
    )
}