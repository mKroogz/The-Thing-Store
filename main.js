const container = document.querySelector("#thingList")

document.querySelector("#saveEntry").addEventListener("click", event => {
    /*
        Collect the user put by selecting the input fields, one
        at a time, and accessing the `value` property
    */
    const thing = document.querySelector("#buyThing").value
    const location = document.querySelector("#location").value

    // Once you have collected all the values, update the DOM
    // with some HTML
    container.innerHTML += `
        <section>
            <div>I can purchase ${thing} at ${location}</div>
        </section>
    `

})