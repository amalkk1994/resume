import Skill from './Skill'

const Skills = ({ skills }) => {
    return (
        <>
            {skills.map((skill) => (
                <Skill key={skill.id} skill={skill} />
            ))}
        </>
    )
}

export default Skills
