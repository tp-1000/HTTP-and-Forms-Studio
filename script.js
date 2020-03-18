// TODO: create a handler
window.addEventListener("load", function(){
    const engineList = {
        google: "https://www.google.com/search",
        duck: "https://duckduckgo.com/",
        bing: "https://www.bing.com/search",
        ask: "https://www.ask.com/web"
    }
    
    // get elements from DOM
    const form = this.document.querySelector("form")
    const button = this.document.querySelector('button');
    
    // submit will check radios for true and set action attribute for the form.
    button.addEventListener("click", function (event) {
        const search_input = document.querySelector('input[id=q]');
        const search_engine = document.querySelector('input[name=search_engine]:checked').value;

        // search_engine
        if (search_input.value === "") {
            event.preventDefault();
            alert("field required!");

        } else {
            let action_url = engineList[search_engine];
            form.setAttribute("action", action_url)
        
        }
            // for (let engine of search_engines) {
            //     if(engine.checked === true) {
            //         let action_url = engineList[engine.value];
            //         form.setAttribute("action", action_url)
            //     }
            // }
        
    })
});
