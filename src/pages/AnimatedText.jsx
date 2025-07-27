import {TypeAnimation} from 'react-type-animation'

const AnimatedText = () => {
  return (
    <TypeAnimation
    sequence ={[
      'React Enthusiast.',
      2000,
      'Web Designer.',
      2000,
      'Problem Solver.',
      2000,
      'Code Lover.',
      2000,
      
    ]}
    wrapper = 'span'
    speed = {50}
    repeat = {Infinity}
    className = 'text-[50px] text-[#074188] font-bold backdrop-blur-md bg-white/70 z-10 italic rounded-md max-mobile:text-[27px]'
    />
  )
}

export default AnimatedText