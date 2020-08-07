import React, { useContext, useState, useEffect } from 'react'
import ApiContext from '../api/ApiContext'
import UserItem from './UserItem';


const Body = () => {
    const apiContext = useContext(ApiContext);

    const { current, getmed } = apiContext;
    const [currentPage, setCurrentPage] = useState(0);
    const [loading, setLoading] = useState(false)
    const [postsPerPage] = useState(10);

    useEffect(() => {
        setLoading(true)
        getmed(postsPerPage, currentPage);
        setLoading(false)
    }, [getmed, postsPerPage, currentPage])
    if (currentPage < 0) {
        setCurrentPage(0);
    }

    return (
        <div>
            <div style={userStyle}>
                {loading ? <div>Loading...</div> : current.map((d) => <UserItem key={d._id} d={d} />)}

            </div>
            <div className='text-center' style={{ marginTop: '30px', marginBottom: '60px' }}>
                <p>Page No. {currentPage}</p>
                <button className="btn-primary btn:hover" style={{ padding: '8px 35px 8px 35px', marginTop: '5px', marginRight: '10px', border: 'transparent', borderRadius: '5px', }} onClick={() => setCurrentPage(currentPage - 1)}  >Previous</button>
                <button className="btn-primary btn:hover" style={{ padding: '8px 35px 8px 35px', marginTop: '5px', marginLeft: '10px', border: 'transparent', borderRadius: '5px', }} onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
            </div>
        </div>
    )
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4,1fr)',
    gridGap: '1rem'
}

export default Body 