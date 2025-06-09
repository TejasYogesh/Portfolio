import { TypeAnimation } from 'react-type-animation';

const ExampleComponent = () => {
    return (
        <TypeAnimation
            sequence={[
                // Same substring at the start will only be typed out once, initially
                'Hi there!!',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Wanted to know about me??',
                1000,
                'I am Tejas.',
                1000,
                'I am a Mysorian.',
                1000,
                'I am a good web developer.',
                1000,
                'I am a good video editor.',
                1000,
                'I am a graphic designer.',
                1000,
                'I am a good animator.',
                 1000,
                'Scroll down to view more.'
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '85px', display: 'inline-block' }}
            repeat={0}
        />
    );
};
export default ExampleComponent