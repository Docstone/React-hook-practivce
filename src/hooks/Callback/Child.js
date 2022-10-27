import {useEffect} from 'react'

const Child = ({ returnComment }) => {
    useEffect(() => {
        console.log('useCallback: Function is called')
    },[returnComment])

  return (
    <div>{returnComment()}</div>
  )
}

export default Child;
