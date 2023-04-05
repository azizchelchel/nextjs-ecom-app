import Image from "next/image";
import Link from "next/link";

const Blog = (props) => {
  return (
    <div className="container">
    <h1>
      blog page
    </h1>

    <hr />
    <div className='container'>
        <div className="row">
          {
            props.posts.map(
               post => <div className="col-12 col-md-4"  key={post.id}>
                <div className="card mb-4"> 
                <div className="list-group" >
                
                <a className="list-group-item list-group-item-action" id={post.id}>Post {post.id}</a>
                </div>
                <img src={`https://source.unsplash.com/720*400/?${post.id}`} className="card-img-top" alt="image" width={286.4} height={286.4}/>
                <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.body}</p>
                <Link  href={`/blog/${post.id}`}>
                <h3>{`post${post.id}`}</h3>
                </Link>

                </div>

                </div>
              </div> 
            )
          }
        </div>
        </div>
    </div>
  )
}

export async function  getStaticProps(){ 
   const posts = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=9');
  const jsonPosts = await posts.json();
  return {
    props: {
      posts: jsonPosts 
    }
  }
}

export default Blog