import React from 'react'
import { Bookmark} from 'lucide-react'

function Card() {
  return (
    <div>
            <div className="cards">
        <div className="top">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnm5CmL80RwspTM5fccqQGnp3IgQGMPDKgkA&s" alt="" />
          <button>Saved <Bookmark size={14}/></button>
        </div>
        <div className="center">
          <h3>Amazon <span>5 days ago</span></h3>
          <h2>Senior UI/UX desiginer</h2>
          <div className='tag'>
            <h4>Part Time</h4>
            <h4>Senior Level</h4>
          </div>

        </div>
        <div className="bottom">
          <div>
              <h3>$120/hr</h3>
              <p>Bharatpur ,Nepal</p>
            <button>ApplyNow</button>
          </div>
    
        </div>

      </div>
    </div>
  )
}

export default Card
