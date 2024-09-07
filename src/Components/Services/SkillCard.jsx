import React,{useState} from 'react'
import { Icon } from '@iconify/react';
const SkillCard = (props) => {
    const [rotateY, setRotateY] = useState(0);
    const [rotateX, setRotateX] = useState(0);

    const handleMouseMove = (event) => {
        const containerWidth = event.currentTarget.offsetWidth;
        const containerHeight = event.currentTarget.offsetHeight;
        const centerX = containerWidth / 2;
        const centerY = containerHeight / 2;
        const mouseX = event.pageX - event.currentTarget.offsetLeft;
        const mouseY = event.pageY - event.currentTarget.offsetTop;
        const newRotateY = ((mouseX - centerX) / containerWidth) * 40;
        const newRotateX = -((mouseY - centerY) / containerHeight) * 40;

        setRotateY(newRotateY);
        setRotateX(newRotateX);
    };

    const resetImageTransform = () => {
        setRotateY(0);
        setRotateX(0);
    };
    return (
        <div onMouseMove={handleMouseMove}
            onMouseLeave={resetImageTransform}
            className="skill-card"
            style={{
                transform: `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`,
                cursor: 'pointer',
            }}
        >
        <Icon className='skill-icon' icon={props.icon}/>
            <h3>{props.skill}</h3>
        </div>
    )
}

export default SkillCard
