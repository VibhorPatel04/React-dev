const Contact = () => {
    return (
        <div className="p-4 text-center">
        <h1 className="text-2xl font-bold">Contact Us</h1>
        <form className="flex flex-col gap-5 justify-center mt-6">
            <input type="text" className="w-60 mx-auto border ps-3 py-2 rounded-md text-black outline-dotted" placeholder="name" />
            <input type="email" className="w-60 mx-auto border ps-3 py-2 rounded-md text-black outline-dotted" placeholder="email" />
            <input type="text" className="w-60 mx-auto border ps-3 py-2 rounded-md text-black outline-dotted" placeholder="mobile number" />
            <button className="w-40 text-center text-white bg-blue-700 hover:bg-blue-800 mx-auto focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit</button>
        </form>
        </div>
    )
}
export default Contact;