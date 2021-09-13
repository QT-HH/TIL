import { useEffect } from 'react'
import MyCChild from './MyCChild'

function MyChild(props) {

  useEffect(() => {
    console.log('Child useEffect!!')
  })

  return (
    <div>Child!!
      <MyCChild />
      {console.log('MyChild return')}
    </div>
  );
}
  
export default MyChild;