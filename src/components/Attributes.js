import Attribute from "./Attribute"

const Attributes = ({ attributes }) => {
    return (
        <>
          {attributes.map((attribute) => (
              <Attribute key={attribute.id} 
               attribute={attribute}
              />
          ))}
        </>
    )
}

export default Attributes
