import React from 'react'
import Counter from './Counter/Counter'
import UserInput from './userInput/UserInput'
import Display from './DisplayList/Display'
import Toggle from './toggle/Toggle'
import Fetch from './fetch/Fetch'
import Timer from './Timer/Timer'
import QuoteGen from './randomQuote/QuoteGen'
import UploadImage from './uploadimage/UploadImage'
import Weather from './Weather/Weather'
import Items from './Search/Items'
import PageItems from './pagination/PageItems'
import ColorPicker from './ColorPicker/ColorPicker'
import ResponsiveMenu from './ResNavigation/ResponsiveMenu'
const App = () => {

  return (
    <div>
      {/* <Counter/> */}
      {/* <UserInput/> */}
      {/* <Display/> */}
      {/* <Toggle/> */}
      {/* <Fetch/> */}
      {/* <Timer/> */}
      {/* <QuoteGen/> */}
      {/* <UploadImage/> */}
      {/* <Weather/> error due to apikey */}
      {/* <Items/> search*/}
      {/* <PageItems/>  pagination */}
      {/* <ColorPicker/> */}
      <ResponsiveMenu/>

    </div>
  )
}

export default App