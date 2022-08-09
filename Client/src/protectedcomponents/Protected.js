import { Navigate} from 'react-router-dom'

const Protected = ({children}) => {
    const token=localStorage.getItem("authorization")
    
  return (
    <div>
{token.length ? children: <Navigate to="/login"/>}
    </div>
  )
}

export default Protected