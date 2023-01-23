import { Form } from './Components/Form/Form'
import { Todo } from './Components/Todo/Todo'
import { Footer } from './Components/Footer/Footer'

import logoredux from './Assets/redux-logo.png'

import './App.scss'

function App() {
  return (
    <section id="section">
      <div className="content">
        <div className="title">
          <h1>TODO-LIST</h1>
          <img src={logoredux} alt="REDUX" />
        </div>
        <Form />
        <Todo />
      </div>
      <Footer />
    </section>
  )
}

export default App
