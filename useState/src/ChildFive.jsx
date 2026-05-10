import CoutomHooks from './CoutomHooks'
const ChildFive = ()=>{
     const {handleIncement , handledecrement , Count } = CoutomHooks()
  return (<>

        <h1 className="">{Count}</h1>
        <button onClick={handleIncement}>Increment </button>
        <button onClick={handledecrement}>Decrement </button>
  </>)
}
export default ChildFive