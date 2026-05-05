const ChildOne = ({UseCallBackHook}) =>{
    console.log("component-rerenderd")
    return (<>

        <button onClick={UseCallBackHook}>Click me From Child </button>
    </>)
}
// this will not work export default React.memo(ChildOne)
export default React.memo(ChildOne)
