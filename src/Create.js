import { useState } from "react";
import { useHistory } from "react-router-dom";


const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('xdk');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author }

        setIsPending(true);

        setTimeout(() => {
            fetch('https://covid19-blogs.herokuapp.com/api', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(blog)
            }).then(() => {
                console.log("New blog added!")
                setIsPending(false);
                //history.go(-1);
                history.push('/');
            })
        }, 500);

      
    }

   
    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit ={handleSubmit}>
                <label>Blog title:</label>
                <input 
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}>
                </input>
                <label>Blog body:</label>
                <textarea 
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}>
                </textarea>
                <label>Blog author:</label>
                <select value = {author}
                onChange = {(e) => setAuthor(e.target.value)}>
                    <option value="covid19">Covid19</option>
                    <option value="xdk">XDK</option>
                </select>

               


                { !isPending && <button>Add Blog</button>}
                { isPending && <button disabled>Adding Blog...</button>}
            </form>
        </div>
     );
}
 
export default Create;
