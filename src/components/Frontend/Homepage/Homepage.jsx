import React from 'react'
import Banner from './Banner'
import SliderMovie from './SliderMovie'

const Homepage = () => {
  return (
 
      <div className='pb-24  bg-dark'>

<Banner/>
<SliderMovie title="Top Picks"/>
<SliderMovie title="International" filter="International"/>
<SliderMovie title="Anime" filter="Anime" />
<SliderMovie title="Local"/>
<SliderMovie title="Cartoons"/>
</div>
  )
}

export default Homepage
