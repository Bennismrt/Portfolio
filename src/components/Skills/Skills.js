import React from 'react'
import Title from '../Title'
import './Skills.css'

class Skills extends React.Component {
    state = [
        {
            id: 1,
            image: require('../assets/html.png'),
            name: "HTML"
        },
        {
            id: 2,
            image: require('../assets/css3.png'),
            name: "CSS"
        },
        {
            id: 3,
            image: require('../assets/tailwind.png'),
            name: "Tailwind CSS"
        },
        {
            id: 4,
            image: require('../assets/js.png'),
            name: "JavaScript"
        },
        {
            id: 5,
            image: require('../assets/react-js.png'),
            name: "React JS"
        },
        {
            id: 6,
            image: require('../assets/ps.png'),
            name: "Adobe Photoshop"
        },
        {
            id: 7,
            image: require('../assets/ai.png'),
            name: "Adobe Illustrator"
        },
        {
            id: 7,
            image: require('../assets/figma.png'),
            name: "Figma"
        },
        {
            id: 8,
            image: require('../assets/pr.png'),
            name: "Adobe Premiere"
        }
    ]

    render(){
        const Data = this.state;
        return (
            <div className='skills' id='Skills'>
                <Title name="Skills" style={SkillsTitle}/>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <div className='container'>
                {Data.map(item => 
                    <div key={item.id} className="cards">
                        <img src={item.image} alt={item.name}/>
                        <h4>{item.name}</h4>
                    </div>
                )}
                <div className='container1'>

                </div>
                </div>
            </div>
    
        )
    }
    
}

export default Skills;

const SkillsTitle = {
    fontSize: "54px",
    paddingBottom: "52px",
    textAlign:"center"
}