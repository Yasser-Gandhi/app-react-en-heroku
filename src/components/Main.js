import React from "react";

export default function Main() {
    return (
        <main>
            <h1 className="main--title">App desarrollada con React</h1>
            <p className="main--content">
Esta aplicación fue desarrollada con React y forma parte de las actividades de la asignatura:            </p>
            <ul className="list--items">
                <li>Conceptualización de servicios en la nube</li>
            </ul>
            <div className="video--container">
            <iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/bMknfKXIFA8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>    
        </main>
    )
}