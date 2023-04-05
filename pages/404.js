import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Error404 = () => {
  const router = useRouter();
  console.log(router.replace("/"));
  useEffect( () => { setTimeout( () => { router.push("/")} , 3000 ) } , [] )
  return (
    <div className="container">
    <div>
      <h1>Page  not found</h1>
    </div>
    <div>
      <Link legacyBehavior href="/" > 
      <a className="btn btn-dark">Go to home page</a>
      </Link>
    </div>
    </div>
    
  )
}
export default Error404