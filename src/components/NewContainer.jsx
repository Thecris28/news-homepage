
import { NewArticle } from './NewArticle'

const articles = [
    {
        title: 'Hydrogen VS Electric Cars',
        paragraph: 'Will hydrogen-fueled cars ever catch up to EVs?'
    },
    {
        title: 'The Downsides of AI Artistry',
        paragraph: 'What are the possible adverse effects of on-demand AI image generation?'
    },
    {
        title: 'Is VC Funding Drying Up?',
        paragraph: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.'
    }
]

export const NewContainer = () => {
  return (
    <aside className='new-container'>
        <h2 className='new-title'>New</h2>
        {articles.map((article ,index) => {
            return <NewArticle key={index} title={article.title} paragraph={article.paragraph} />
        })}
          
    </aside>
  )
}
