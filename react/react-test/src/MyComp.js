import { useEffect } from 'react'

function MyComp(props) {
  useEffect(() => {
    console.log('MyComp useEffect!!!!')
  })
  
  console.log('myComp', props)

  return (
    <div>Hello
      {props.children}
      {console.log('MyComp return')}
    </div>
  );
}

export default MyComp;