import React from 'react'
import { Calculator } from './copmponent/Calculator'
import { ContexTest, store } from './store'
import { Provider } from 'react-redux'
import Form from './copmponent/Form'

const App = () => {
  return (
    <div>
      {/* <ContexTest.Provider value={}> */}
      <Provider store={store}>
        <Calculator/>
        <Form/>
      </Provider>
      {/* </ContexTest.Provider> */}
    </div>
  )
}

export default App