import { useEffect } from 'react'

function MyChild2(props) {

  useEffect(() => {
    console.log('Child2 useEffect!!')
  })

  return (
    <div>Child!!
      {console.log('MyChild2 return')}
    </div>
  );
}
  
export default MyChild2;