

import './style.css'

export const NewArticle = ({title, paragraph}) => {
  return (
    <article className='new-article'>
        <div>
        <h2>{title}</h2>
        <p>{paragraph}</p> 
        </div>
    </article>
  )
}
