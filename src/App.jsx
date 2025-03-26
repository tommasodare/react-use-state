import { useState } from 'react'

const tabs = [
    {
        id: 1,
        name: "HTML",
        content: "HTML Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique neque aliquid labore voluptatibus laboriosam aliquam minima officiis tempora asperiores alias accusantium veritatis eius molestiae mollitia suscipit odit illum, velit ducimus!"
    },
    {
        id: 2,
        name: "CSS",
        content: "CSS Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique neque aliquid labore voluptatibus laboriosam aliquam minima officiis tempora asperiores alias accusantium veritatis eius molestiae mollitia suscipit odit illum, velit ducimus!"
    },
    {
        id: 3,
        name: "JS",
        content: "JS Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique neque aliquid labore voluptatibus laboriosam aliquam minima officiis tempora asperiores alias accusantium veritatis eius molestiae mollitia suscipit odit illum, velit ducimus!"
    },
    {
        id: 4,
        name: "PHP",
        content: "PHP Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique neque aliquid labore voluptatibus laboriosam aliquam minima officiis tempora asperiores alias accusantium veritatis eius molestiae mollitia suscipit odit illum, velit ducimus!"
    }
]

export default function App() {

    function handleTabClick() {
        console.log('Cliccato');

    }

    return (

        <>
            <h1>Tabs</h1>

            <div className="container">

                <div>
                    {
                        tabs.map(tab => (
                            <button key={`tab-${tab.id}`} className="btn btn-primary" onClick={handleTabClick}>{tab.name}</button>
                        ))}

                </div>


                <div className="content">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore magnam architecto veritatis, aliquid autem eveniet quibusdam quas assumenda! Perspiciatis fugiat ipsam similique pariatur, ipsum esse! Doloribus architecto beatae quis similique!
                </div>


            </div>
        </>

    )
}