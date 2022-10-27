import { useEffect, useState } from "react";
import PostCardSpecial from "../components/PostcardSpecial";

export default function HomePage() {

  const [posts, setPosts] = useState([]);
  const [isPosts, setIsPosts] = useState(true); // isPosts can be true or false
  
  useEffect(() => {
    async function getPosts() {
        // the trick is to add a "database" name to the end of the url. This "database" is automatically created
      const url =
        "https://translations-70a25-default-rtdb.europe-west1.firebasedatabase.app/favourites.json";
      const response = await fetch(url);
      const data = await response.json();
      if (data !== null) {
        const postsArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setPosts(postsArray); // Update "posts" object array list. Set posts equal to postsArray
      } else {
        setIsPosts(false); // If no data is found, set isPosts to "false". "Noting to show" message is shown.
      }
    }
    getPosts();
  }, []);

  // PostCard is implemented. It receives the data (translations)
  // retrieved above.
  return (
    <article className="page">
      <h1>Translations</h1>
      {isPosts ? (
        <div className="flexbox">
          {posts.map((post) => (
            <PostCardSpecial key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <p>Nothing to show</p>
      )}
    </article>
  );
}
