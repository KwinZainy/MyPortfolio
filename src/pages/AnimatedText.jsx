import {TypeAnimation} from 'react'

const AnimatedText = () => {
  return (
    <TypeAnimation
    sequence ={[
      'Software Developer',
      2000,
      'Frontend Developer',
      2000,
      'Web Designer',
      2000,
    ]}
    wrapper = 'span'
    speed = {50}
    repeat = {Infinity}
    className = 'text-xl text-black '
    />
  )
}

export default AnimatedText