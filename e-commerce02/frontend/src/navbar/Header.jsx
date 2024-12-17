import React from 'react'
import Search from '../components/Search'

const Header = () => {
  return (
    <div className=' top-strip py-2'>
    <div className='container'>
        <div className='flex items-center justify-between '>
            <div className='col1 w-[50%]'>
                <p className='text-[14px] font-[500]'>Get up to 50% off new season styles, limited time only</p>
            </div>
            <div className='col2'>
                  <Search/>
            </div>
        </div>
    </div>
</div>
  )
}

export default Header