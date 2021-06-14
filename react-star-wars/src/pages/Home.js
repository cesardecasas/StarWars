import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Home.css'

const Home = (props)=>{

    console.log(props)
    return(
        <div>
            <nav>
                <h1>Starships</h1>
            </nav>
            <div className='template'>
                {props.starships.map((starship, index)=>{

                     let location = {
                        pathname:'/starship',
                        state:starship
                     }
                     return(
                         <Link to={location} key={starship.name}>
                            <div className='card'>
                                <h1 className='link'>{starship.name}</h1>
                                <p>Units: {starship.cost_in_credits}</p>
                            </div>
                        </Link>
                     )
                    
                })}
            </div>

        </div>
    )
}

export default Home