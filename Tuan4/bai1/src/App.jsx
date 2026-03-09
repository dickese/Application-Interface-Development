import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    // 1. fetch API with fetch.then
    const fetchUsers = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          setUsers(data)
          setLoading(false)
        })
    }

    // 2. Fetch API with async wait
    // const fetchUsers = async () =>{
    //   try{
    //     const res = await fetch("https://jsonplaceholder.typicode.com/users")
    //     const data = await res.json()
    //      setLoading(false)
    //     setUsers(data)
    //   }catch(err){
    //       console.log(err)
    //   }
    // }

    fetchUsers()
  }, [])

  return (
    <>
      {loading 
        ? 
        <span>Loading</span>
       :
        users.map((item) => (
          <div className="" key={item.id}>
              {item.name}
          </div>
        ))
      }
    </>
  )
}

export default App
