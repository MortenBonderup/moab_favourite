export default function PostCardSpecial({post}) {
 
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
    </div>
  );
}
