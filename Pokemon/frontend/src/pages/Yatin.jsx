import React from 'react'

const Yatin = () => {
  return (
    <form>
        <div>
        <label htmlFor="">Username:</label>
        <input type="text" id='' name='name' />
        </div>
        <div>
            <label htmlFor="">Email:</label>
            <input type="email" name='email'  />
        </div>
        <button type='submit'>Submit</button>
    </form>
  )
}

export default Yatin