
export async function getStaticPaths() {
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=9`);
    const jsonData = await data.json();
    console.log(jsonData)
    const paths = jsonData.map( 
        post =>  ({ params: { id: `${post.id}` }})
    );
    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps(context) {
    const id = context.params.id;
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const jsonData = await data.json();
    return {
        props:{
            post: jsonData
        }
    }
}

const Post = ({post}) => {
    return (
      <div>
          {
                <div className="container" key={post.id}>
                     <div><span><i><b>Post : {post.id}</b></i></span> </div>
                     <hr />
                     <div><b><i>{post.title}</i></b></div>
                     <hr />
                     <div><b><i>{post.body}</i></b></div>

                </div>
          }
      </div>
    )
  }
export default Post