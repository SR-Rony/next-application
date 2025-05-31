
import React from 'react'

const Docs = async ({params}) => {
 
  const param = await params
  const slug = await param.slug
  
  if(slug== 2 ){
    return (
      <h1>
        Viewing docs for feature {slug[0]} and concept {slug[1]}
      </h1>
    )
  }
  else if(slug == 1){
    return(
      <h2>
        Viewing docs for fature {slug[0]}
      </h2>
    )
  }
  
  
  

  return (
    <div>
        <h1>Welcome to doc pages</h1>
    </div>
  )
}

export default Docs