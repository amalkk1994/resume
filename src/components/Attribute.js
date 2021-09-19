import Button from './Button'
import AttributeDetails from './AttributeDetails'
import { useState } from 'react'

const Attribute = ({ attribute }) => {
    const onClick = () => {
        console.log('Click from App')
        return setToggleAttribute(!toggleAttribute)
      }
    
      const [toggleAttribute, setToggleAttribute] = useState(false)

    return (
        <>
            <Button color={attribute.color} text={attribute.attributeName} onClick={onClick}/>
            {toggleAttribute && <AttributeDetails text={attribute.attributeDescription}/>}  
        </>
    )
}

export default Attribute
