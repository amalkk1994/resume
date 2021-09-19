import PropTypes from 'prop-types'
import { useState } from 'react'
/* import Button from './Button' */
import Summary from './Summary'

const Header = ({ name }) => {
   /* const onClick = () => {
        console.log('click from Header')
        return setShowSummary(!showSummary)
    }

    const [showSummary, setShowSummary] = useState(false)
    */
    return (
        <header>
            <h1>{name}</h1>
        </header>
    )
}

Header.defaultProps = {
    name: 'Resume',
}

Header.propTypes = {
    name: PropTypes.string,
}

/*
            <Button color='green' text={showSummary ? '- Summary' : '+ Summary'} onClick={onClick} />
            {showSummary && <Summary />}
            <Button color='green' text='Skill Highlights' />
            <Button color='green' text='Experience' />
            */

export default Header
