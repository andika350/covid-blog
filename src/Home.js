import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id)
    //     setBlogs(newBlogs);
    // }

    return ( 
       <div className="home">
        { error && <div>{ error }</div>}
        { isPending && <div>Loading...</div>}
        {blogs && <BlogList  blogs ={ blogs } title="All Blogs!" />}

         {/* <BlogList  blogs ={ blogs.filter((blog) => blog.author === 'Covid19' ) } 
         title="Covid19's Blogs!" handleDelete={handleDelete}/> */}
       </div>
    );
}
 
export default Home;