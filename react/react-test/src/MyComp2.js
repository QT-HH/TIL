import { useEffect } from 'react'

function MyComp2(props) {
  useEffect(() => {
    console.log('MyComp2 useEffect!!!!')
  })
  
  console.log('myComp2', props)

  return (
    <div>Hello
      {props.children}
      {console.log('MyComp2 return')}
    </div>
  );
}

export default MyComp2;