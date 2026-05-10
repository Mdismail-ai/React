const WorkingWithArrays = ()=>{
    const arr = [1,343,534,6,435,2,52,52,5,345,34,5]
    return(
    <div id="P">
         {arr.map((arrr , index)=>(
    <div id = "C" key={index}>
        {arrr}
    </div>
    ))}
    </div>
   



    )
}
export default WorkingWithArrays
