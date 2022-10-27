import { useEffect, useState } from "react";

export default function PostCard({post}) {

  const [card, setCard] = useState([])

  useEffect(() => {
    if (post) {
        setCard(post);
    } 
}, [post]);

  async function addFavourites() {
      // the trick is to add a "database" name to the end of the url. This "database" is automatically created
      const url = "https://translations-70a25-default-rtdb.europe-west1.firebasedatabase.app/favourites.json";
      const response = await fetch(url, {
          method: "POST", 
          body: JSON.stringify(card) 
      });
      const data = await response.json();
      console.log(data);
      alert("Translation added to favourites");
  } 

  async function addCurrent() {
    // the trick is to add a "database" name to the end of the url. This "database" is automatically created
    const url = "https://translations-70a25-default-rtdb.europe-west1.firebasedatabase.app/current.json";
    const response = await fetch(url, {
        method: "POST", 
        body: JSON.stringify(card) 
    });
    const data = await response.json();
    console.log(data);
    alert("Translation added to current watching");
} 

  
  return (
      <div className="card_container">
      <span className="ident">{post.tid}</span>
      <section className="card">
        <div className="english">
          <p>[Eng]</p>
          <p>{post.en}</p>
        </div>
        <div>&rarr;</div>
        <div className="danish">
          <p>[Dk]</p>
          <p>{post.dk}</p>
        </div>
      </section>
    <button onClick={addFavourites}>Add to favourites</button>
    <button onClick={addCurrent}>Add to current watching</button>
    </div>
  );
}
