import './components/todo/todo.css';
import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import reactLogo from './assets/react.svg';

const App = () => {
  const hoidanIT = "Eric";

  return (

    <h1 className="todo-container">
      <div className="todo-title">Create Your Student Account</div>
      <div className="todo-bio">Your student account is your portal to all things Udacity: your classroom, projects, forums, carreer resources, and more!</div>
      <div className='todo-data'>
        <div> First Name*</div>
        <div> Last Name*</div>
      </div>
      <div className='todo-data-2'>
        <div> Email Address*</div>
      </div>
      <div className='todo-data'>
        <div> Password*</div>
        <div> Confirm Password*</div>
      </div>
      <button className='todo-button'>SIGN UP</button>
      <div class="line"></div>
      <div className="todo-gray"> or sign up with one of these service</div>
      <div className='todo-data'>
        <button className='button-2 facebook'> FACEBOOK </button>
        <button className='button-2 google'> GOOGLE</button>
      </div>
    </h1>
  )
}

export default App
