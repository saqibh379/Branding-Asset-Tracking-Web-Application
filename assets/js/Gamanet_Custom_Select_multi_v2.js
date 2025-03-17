
const multiSelectComponentWrapV2 = document.querySelectorAll(".select-multi-component-wrap-v2")

// const body = document.querySelector("body")
// const allSelect = document.querySelectorAll(".select")

// function closeSelectList(){
//     body.addEventListener("click", function(){
//         allSelect.forEach(el => {
//             if(el.classList.contains("active")){
//                 el.classList.remove("active")
//                 console.log(el.id);
//             }
//         })
//     }, true)
// }

// closeSelectList()

multiSelectComponentWrapV2.forEach(el => {

    const multiSelect = el.querySelector(".select")
    const badgeWrap = el.querySelector(".badge-wrap")
    const multiSelectListItems = el.querySelectorAll(".select-multi-item")
    const multiSelectInput = el.querySelector(".select-input")
    const selectedQuantity= el.querySelector("[data-selected-quantity]")


    el.addEventListener("click", (e) => {
        const badges = el.querySelectorAll(".multi-selected")
        selectedQuantity.innerText = `${badgeWrap.children.length}`

        multiSelect.classList.toggle("active")
        
        if (badges.length > 0) {

            badges.forEach(el => {
    
                el.lastElementChild.addEventListener("click", () => {
                    const atr = el.dataset.badges

                    multiSelectListItems.forEach(el => {
                        if (atr === el.id) {
                            el.classList.remove("active")
                        }
                    })

                    badgeWrap.removeChild(el)
                })
            })
        } 

        placeholder()
        selctedCounter()

 
    })

    multiSelectListItems.forEach(el => {
        el.addEventListener("click", () => {
            createBadge(el)
            el.classList.add("active")
            placeholder()
            selctedCounter()

        })
    })

    multiSelectListItems.forEach(el => {
        if(el.classList.contains("active")){
            selectedQuantity.innerText = `${badgeWrap.children.length}`
            createBadge(el)
        }

        el.addEventListener("click", e => {
            e.stopPropagation()
            select.classList.remove("active")
        })
    })

    
    function createBadge(el){
        const badge = document.createElement("div");
        badge.setAttribute("data-badges", el.id)
        badge.classList.add("multi-selected")
        badge.innerHTML = `<span>${el.innerText}</span> <button class="badge-btn"><img src="icon_x.svg"/></button>`
        badgeWrap.appendChild(badge)
        
    }

    multiSelectInput.addEventListener('input', autoresize);

    function autoresize() {
        let size = multiSelectInput.scrollWidth
        multiSelectInput.style.width = size + 'px';
    }

    function placeholder(){
        if(badgeWrap.children.length != 0){
            multiSelectInput.classList.remove("placeholder")
            badgeWrap.classList.remove("d-none")
            multiSelect.classList.remove("search")
            
        } else{
            multiSelectInput.classList.add("placeholder")
            badgeWrap.classList.add("d-none")
            multiSelect.classList.add("search")
            
        }
    }

    function selctedCounter(){
        if(badgeWrap.children.length > 0){
            selectedQuantity.parentElement.classList.remove("d-none")
            selectedQuantity.innerText = `${badgeWrap.children.length}`
        } else {
            selectedQuantity.parentElement.classList.add("d-none")
        }

    }

    selctedCounter()

    placeholder()

})






