import { FaTimes } from 'react-icons/fa'

const Skill = ({ skill }) => {
    return (
        <div className='skill'>
            <h3>{skill.text} <FaTimes style={{ color: 'red',
        cursor: 'pointer'}}/></h3>
            <p>{skill.status}</p>
        </div>
    )
}

export default Skill
