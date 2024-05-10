import './App.css';

import User from './components/User';

const friends = [
  {
    id: 1,
    name: "Ahmet",
  },
  {
    id: 2,
    name: "Tayfun",
  },
  {
    id: 3,
    name: "Gökhan",
  },
];

function App() {
 return (
   <>
    <User 
    name="Mustafa"
    surname="Üzüm" 
    isLoggedIn={true} 
    age={"29"}
    friends={friends}
    address={{
      title: 'Fatih/Istanbul',
      zip: 34037,
    }}
    />
   </>
  );
}


export default App;
