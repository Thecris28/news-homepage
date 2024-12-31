import { Article } from "./Article"

const articles = [
    {
        img: 'image-retro-pcs',
        number: '01',
        title: 'Reviving Retro PCs',
        paragraph: 'What happens when old PCs are given modern upgrades?'
    },
    {
        img: 'image-top-laptops',
        number: '02',
        title: 'Top 10 Laptops of 2022',
        paragraph: 'Our best picks for various needs and budgets.'
    },
    {
        img: 'image-gaming-growth',
        number: '03',
        title: 'The Growth of Gaming',
        paragraph: 'How the pandemic has sparked fresh opportunities.'
    }
]

export const ArticleContainer = () => {
  return (
    <section className="article-container">
        {articles.map((articles, index) => {
            return <Article key={index} img={articles.img} number={articles.number} title={articles.title} paragraph={articles.paragraph} />
        })}
    </section>
  )
}
