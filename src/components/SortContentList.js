import React from 'react'

const SortContentList = () => (
  <div>
    Sort:
    <select style={{marginLeft: '5px'}}>
      <option value="newest">Newest</option>
      <option value="oldest" >Oldest</option>
      <option value="most_voted" >Most voted</option>
      <option value="less_voted">Less voted</option>
    </select>
    
  </div>
)

export default SortContentList