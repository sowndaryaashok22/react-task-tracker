

const Button = ({color, label, onClick}) => {
    return (
       
        <button className= 'btn' style={{backgroundColor : color}} onClick={onClick}>{label}</button>
       
    )
}

export default Button
