import { useEffect, useState } from "react";
import { useGetUsersQuery } from "./services/users.js";

import { FaCalendarTimes, FaEnvelopeOpen, FaLock, FaMap, FaPhone, FaUser } from 'react-icons/fa'

function App() {

    const [person, setPerson] = useState(null);
    const { data, isLoading, refetch } = useGetUsersQuery()

    const [title, setTitle] = useState("name")

    const defaultImage = 'https://randomuser.me/api/portraits/women/77.jpg'


    useEffect(() => {
        if (data) {
            const { phone, email } = data.results[0],
                { large: image } = data.results[0].picture
            const { first, last } = data.results[0].name
            const { age } = data.results[0].dob
            const { number, name } = data.results[0].location.street
            const { password } = data.results[0].login

            const newPerson = {
                image,
                phone,
                email,
                age,
                street: `${number} ${name}`,
                password,
                name: `${first} ${last}`,
            }
            setPerson(newPerson)
        }
    }, [data])

    return (
        <>

            <pre>
                {JSON.stringify(person, null, 2)}
            </pre>
            <main>
                <div className="block bcg-black"></div>
                <div className="block">
                    <div className="container">
                        <img src={(person && person.image) || defaultImage} alt="random user" className="user-img" />
                        <p className="user-title">My {title} is {
                            person && person[title]
                        } </p>
                        <p className="user-value">{person && person.name}</p>
                        <div className="values-list">
                            <button className="icon" data-label="name"
                                onMouseOver={(e) => setTitle(e.target.dataset.label)}>
                                <FaUser />
                            </button>
                            <button className="icon" data-label="email"
                                onMouseOver={(e) => setTitle(e.target.dataset.label)}>
                                <FaEnvelopeOpen />
                            </button>
                            <button className="icon" data-label="age"
                                onMouseOver={(e) => setTitle(e.target.dataset.label)}>
                                <FaCalendarTimes />
                            </button>
                            <button className="icon" data-label="street"
                                onMouseOver={(e) => setTitle(e.target.dataset.label)}>
                                <FaMap />
                            </button>
                            <button className="icon" data-label="phone"
                                onMouseOver={(e) => setTitle(e.target.dataset.label)}>
                                <FaPhone />
                            </button>
                            <button className="icon" data-label="password"
                                onMouseOver={(e) => setTitle(e.target.dataset.label)}>
                                <FaLock />
                            </button>
                        </div>
                        <button className="btn" type="button" onClick={() => refetch()}>
                            {isLoading ? "loading..." : "random user"}
                        </button>
                    </div>
                </div>
            </main>


        </>
    )
}

export default App
