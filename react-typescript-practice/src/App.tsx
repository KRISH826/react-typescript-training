import './App.css'
import Counter from './components/Counter'
import FormSubmit from './components/FormSubmit'
import Union from './components/Union'
import UserDefine from './components/UserDefine'
// import User from './components/User'

const User1 = {
  name: 'debjit panja',
  age: 24,
  isregister: false,
  lang: ['bangla', 'english',]
}

const UserType = [
  {
    id: 1,
    name: 'Debjit Panja',
    age: 25,
    email: 'krish@123gmail.com'
  },
  {
    id: 2,
    name: 'krishnendu panja',
    age: 30,
    email: 'debjitpanja25@gmail.com'
  }
]


function App() {

  return (
    <>
      <div className='app'>
        <h2>KRISHNENDU PANJA</h2>
        <FormSubmit />
        {/* <Counter /> */}
        {/* <UserDefine lang={['bangla', 'english', 'urdu']} user={User1} users={UserType} />
        <Union status='loading' /> */}
        {/* <User name="debjit panja" age={30} isRegister={true} /> // built in props */}
      </div>
    </>
  )
}

export default App
