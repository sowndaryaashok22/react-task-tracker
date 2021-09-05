import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({title, onAddToggle, showAdd}) => {
    
    return (
        <header className = 'header'>
            <h1>{title}</h1>
            <Button 
                color={showAdd ? 'black' : 'pink'} 
                label={showAdd ? "Close" : "Add"}
                onClick={()=>onAddToggle()}
            />
            
        </header>
    )
}

// Header.defaultProps = {
//     title : "my title"
// }

Header.propTypes = {
    title : PropTypes.string.isRequired,
}
export default Header
