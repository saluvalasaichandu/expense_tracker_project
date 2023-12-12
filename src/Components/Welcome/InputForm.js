const InputForm=(props)=>{
    console.log(props);
    return(
        <form>
            <div className="text-xl font-serif">
            <label>User Name: </label>
            <input type="text" placeholder="name" defaultValue={props.data.name}></input>
            {console.log(props.data.name)}

            <label>Email Id: </label>  
            <input type="text" placeholder="email" defaultValue={props.data.email}></input>      
            </div>
            <div className="text-xl font-serif px-32 py-4  ">
                <button className="text-sky-500">Update Details</button>
            </div>
            </form>
    )
};
export default InputForm;