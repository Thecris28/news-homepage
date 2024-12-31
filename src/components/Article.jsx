

export const Article = ({img, number, title, paragraph}) => {

  
  return (
    <article className="article">
      <img src={`/public/images/${img}.jpg`} alt="img archives" />
      <div>
        <strong>{number}</strong>
        <h3>{title}</h3>
        <p>{paragraph}</p>
      </div>
        
    </article>
  )
}
