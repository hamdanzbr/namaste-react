const Contact=()=>{
    return(
        <div>
            <h1>Contact page</h1>

            <div className="m-2">
                <label>Name </label>
                <input className="border m-4" type="text" placeholder="Name"/>

                <label>Message </label>
                <input className="border m-4" type="text" placeholder="Message"/>

                <button className="bg-black text-white">Submit</button>
            </div>
        </div>
    )
}
export default Contact;