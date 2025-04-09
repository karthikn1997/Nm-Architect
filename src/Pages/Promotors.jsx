import React, { useEffect } from 'react'

const Promotors = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='flex items-center justify-center min-h-[50vh] bg-black overflow-hidden'>
            <h2 className='text-3xl font-semibold text-gray-300'>Coming Soon!</h2>
        </div>
    )
}

export default Promotors