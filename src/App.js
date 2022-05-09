import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'

export default function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Card 
            img="mountain.png"
            rating="3.0"
            reviewCount={369}
            country="Portugal"
            title="Btt track"
            price={16}
            />
        </div>
    )
}