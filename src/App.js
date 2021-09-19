import { useState } from 'react'
import Header from './components/Header'
import Skills from './components/Skills'
import Attributes from './components/Attributes'
import Attribute from './components/Attribute'

function App() {
  const [skills, setSkills] = useState([
    {
        id: 1,
        text: 'javaScript',
        status: 'Learning'
    },
    {
        id: 2,
        text: 'react',
        status: 'practising'
    }
])

  const [attributes, setAttributes] = useState([
    {
      id: 1,
      color: 'black',
      attributeName: 'Summary',
      attributeDescription: 'Looking for opportunity to continuously enhance and improve my knowledge'
    },
    {
      id: 2,
      color: 'red',
      attributeName: 'Skill Highlights',
      attributeDescription: 'JavaScript, React'
    },
    {
      id: 3,
      color: 'Blue',
      attributeName: 'Experience',
      attributeDescription: '4yrs'
    }
  ])

  return (
    <div className="container">
      <Header name='John Doe' /> 
      <Attributes attributes={attributes} />
    </div>
  );
}
     /* <Skills skills={skills}/> */ 

export default App;
