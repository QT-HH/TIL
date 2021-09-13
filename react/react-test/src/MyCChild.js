import { useEffect } from 'react'

function MyCChild(props) {

  useEffect(() => {
    console.log('CChild useEffect!!')
  })

  return (
    <div>Child!!
      {console.log('MyCChild return')}
    </div>
  );
}
  
export default MyCChild;