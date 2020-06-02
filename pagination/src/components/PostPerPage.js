import React, {useState} from 'react'

const PostPerPage = ({changePPP}) => {
    const [PPP, setPPP] = useState(10);
  return (
    <div className="form-group">
        <label>Set Posts Per page</label>
        <select className="form-control" value={PPP} onChange={(e)=>{changePPP(e.target.value); setPPP(e.target.value)}}>
            <option>5</option>
            <option>8</option>
            <option>10</option>
            <option>12</option>
            <option>15</option>
            <option>18</option>
            <option>20</option>
        </select>
    </div>
  )
}

export default PostPerPage
