import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'

export default function App() {
    
    const cards = data.map(element => {
        return(
            <Card
                img={element.coverImg}
                rating={element.stats.rating}
                reviewCount={element.stats.reviewCount}
                country={element.country}
                price={element.price}
                title={element.title}
            />
        )
    })
    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cards}
            </section>            
        </div>
    )
}