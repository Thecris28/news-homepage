import React from 'react'
import { Header } from './components/Header'
import { MainArticle } from './components/MainArticle'
import { NewContainer } from './components/NewContainer'
import { ArticleContainer } from './components/ArticleContainer'

export const App = () => {
  return (
    <main className='main'>
        <Header/>
        <div className='container'>
        <MainArticle/>
        <NewContainer/>
        </div>
        < ArticleContainer/>

    </main>
  )
}
