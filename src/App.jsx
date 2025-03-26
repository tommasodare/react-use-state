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

    const [activeTab, setActiveTab] = useState(1)

    function handleTabClick(id) {
        console.log('Cliccata la tab', id);

        setActiveTab(id - 1)
    }

    return (

        <>
            <h1>Tabs</h1>

            <div className="container">

                <div>
                    {
                        tabs.map(tab => (
                            <button key={`tab-${tab.id}`} className={`btn btn-primary m-2 ${activeTab === tab.id - 1 ? 'bg-warning' : ''}`} onClick={() => handleTabClick(tab.id)}>{tab.name}</button>
                        ))
                    }

                </div>


                <div className="content">
                    {tabs[activeTab].content}
                </div>


            </div>
        </>

    )
}