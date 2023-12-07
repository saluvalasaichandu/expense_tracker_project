const InputForm=(props)=>{
    console.log(props);
    return(
        <form>
            <div>
            <label>User Name:</label>
            <input type="text" placeholder="name" defaultValue={props.data.name}></input>
            {console.log(props.data.name)}

            <label>Email Id</label>  
            <input type="text" placeholder="email" defaultValue={props.data.email}></input>      
            </div>
            <div>
                <button>Update Details</button>
            </div>
            </form>
    )
};
export default InputForm;