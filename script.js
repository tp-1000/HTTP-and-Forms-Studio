// TODO: create a handler
window.addEventListener("load", function(){
    const engineList = {
        goolge: "https://www.google.com/search",
        duck: "https://duckduckgo.com/",
        bing: "https://www.bing.com/search",
        ask: "https://www.ask.com/web"
    }
    
    // get elements from DOM
    const form = this.document.querySelector("form")
    const search_engines = document.querySelectorAll('input[name="search_engine"]');
    const button = this.document.querySelector('button');
    
    // submit will check radios for true and set action attribute for the form.
    button.addEventListener("click", function (event) {
        try {
            const search_input = docudsment.querySelector('input[id=q]');
            alert(search_input.value);
        } catch (error) {
            alert(error);
        }
        
        
        if (search_input.value === "") {
            event.defaultPrevented();
            alert("field required");
            break;
        }
        for (let engine of search_engines) {
            if(engine.checked === true) {
                let action_url = engineList[engine.value];
                form.setAttribute("action", action_url)
                // break;
            }
        }
    })
});
