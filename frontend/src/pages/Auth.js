import { useState } from 'react'
import bcrypt from 'bcryptjs'

const Auth = () => {

  const [isAuth, setIsAuth] = useState(false)

  const handleAuth = (e) => {
    if (e.target.value.length === 14) {
      setIsAuth(true)
      const password = e.target.value
      const hashedPass = bcrypt.hashSync(password, 1)
      //e.target.value = ''
      console.log(password, hashedPass)
      bcrypt.compare('$2a$10$Au2HPcJGD35n3CAgYSKY7ea3vsIhIcVOfGKYFSkTdeiTH1jcfsICu', hashedPass, function (err, isMatch) {
        console.log('isMatch', isMatch)
      })
    }
  }

  return (
    <div className="auth">
      <h1>sign in into portfolio dashboard</h1>
      <input maxLength={14} type="password" name="password" onKeyUp={handleAuth} disabled={isAuth} />
    </div>
  )
}

export default Auth