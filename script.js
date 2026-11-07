let btn = document.querySelector("#btn")
let sidebar = document.querySelector(".sidebar")
btn.onclick=function(){
    sidebar.classList.toggle("active")
};
let dash=document.querySelector("#dash")
let dashboard=document.querySelector(".dashboard")
let food=document.querySelector("#food")
let foodsup=document.querySelector(".foodsup")
let vol=document.querySelector("#vol")
let volunteer=document.querySelector(".volunteer")
let disev=document.querySelector("#disev")
let distributionev=document.querySelector(".distributionev")
let disct=document.querySelector("#disct")
let distributionct=document.querySelector(".distributionct")
let h=document.querySelector(".home")
dash.onclick=function(){
    dash.classList.add("selected")
    food.classList.remove("selected")
    vol.classList.remove("selected")
    disev.classList.remove("selected")
    disct.classList.remove("selected")
    dashboard.classList.add("active")
    foodsup.classList.remove("active")
    volunteer.classList.remove("active")
    distributionev.classList.remove("active")
    distributionct.classList.remove("active")
    h.classList.remove("active")
}
food.onclick=function(){
    food.classList.add("selected")
    dash.classList.remove("selected")
    vol.classList.remove("selected")
    disev.classList.remove("selected")
    disct.classList.remove("selected")
    foodsup.classList.add("active")
    dashboard.classList.remove("active")
    volunteer.classList.remove("active")
    distributionev.classList.remove("active")
    distributionct.classList.remove("active")
    h.classList.remove("active")
}
vol.onclick=function(){
    vol.classList.add("selected")
    dash.classList.remove("selected")
    disev.classList.remove("selected")
    disct.classList.remove("selected")
    food.classList.remove("selected")
    volunteer.classList.add("active")
    foodsup.classList.remove("active")
    dashboard.classList.remove("active")
    distributionev.classList.remove("active")
    distributionct.classList.remove("active")
    h.classList.remove("active")
}
disev.onclick=function(){
    disev.classList.add("selected")
    disct.classList.remove("selected")
    vol.classList.remove("selected")
    food.classList.remove("selected")
    dash.classList.remove("selected")
    distributionev.classList.add("active")
    foodsup.classList.remove("active")
    volunteer.classList.remove("active")
    dashboard.classList.remove("active")
    distributionct.classList.remove("active")
    h.classList.remove("active")
}
disct.onclick=function(){
    disct.classList.add("selected")
    dash.classList.remove("selected")
    food.classList.remove("selected")
    vol.classList.remove("selected")
    disev.classList.remove("selected")
    distributionct.classList.add("active")
    foodsup.classList.remove("active")
    volunteer.classList.remove("active")
    distributionev.classList.remove("active")
    dashboard.classList.remove("active")
    h.classList.remove("active")
}
const foodsupp=[]
const foods=document.getElementById("foodList")
const dashfoods=document.getElementById("food-List")
const foodsp=document.getElementById("foodsupplyForm")
foodsp.addEventListener("submit", function(e) {
    e.preventDefault()
    const food=document.getElementById("foodSupply").value
    foodsupp.push(`${food} <input type="submit" value="Used" class="usedbtn"> <input type="submit" value="Remove" class="removebtn">`)
    console.log(foodsupp)
    foods.innerHTML = ""
    dashfoods.innerHTML = ""
    foodsupp.forEach(function (food) {
        const li=document.createElement("li")
        const dashli=document.createElement("li")
        dashli.innerHTML=food.replace(/<input type="submit" value="Used" class="usedbtn"> <input type="submit" value="Remove" class="removebtn">/g,"")
        dashfoods.appendChild(dashli)
        li.innerHTML=food
        foods.appendChild(li)           
})
})
const volsun=[]
const vols=document.getElementById("volunteerList")
const dashvol=document.getElementById("volunteer-List")
const volun=document.getElementById("volunteerForm")
volun.addEventListener("submit", function(e) {
    e.preventDefault()
    const volunselect=document.getElementById("volSelect").value
    const volunteer=document.getElementById("volunteerName").value
    const contact=document.getElementById("volunteercontact").value
    volsun.push( `name: ${volunteer}, contact: ${contact}, assigned to: ${volunselect} <input type="submit" value="Remove" class="removebtn">` )
    console.log(volsun)
    vols.innerHTML = ""
    dashvol.innerHTML = ""
    volsun.forEach(function (volunteer) {
        const li = document.createElement("li")
        const dashli = document.createElement("li")
        dashli.innerHTML = volunteer.replace(/<input type="submit" value="Remove" class="removebtn">/g,"")
        dashvol.appendChild(dashli)
        li.innerHTML = volunteer
        vols.appendChild(li)                   
})
})
const centev=[]
const centeve = document.getElementById("eventList")
const dasheve = document.getElementById("event-List")
const centtime = document.getElementById("centretimeForm")
// centtime.addEventListener("submit", function(e) {
//     e.preventDefault()
//     const centre = document.getElementById("centreSelect").value
//     const time = document.getElementById("centretimeat").value
//     centev.push(`${centre} - ${time} <input type="submit" value="Remove" class="removebtn">`)
//     console.log(centev)
//     centeve.innerHTML = ""
//     dasheve.innerHTML = ""
//     updatevolunteerSelect()
//     centev.forEach(function (event) {
//         const li = document.createElement("li")
//         li.innerHTML = event
//         const dashli = document.createElement("li")
//         dashli.innerHTML = event.replace(/<input type="submit" value="Remove" class="removebtn">/g,"")
//         centeve.appendChild(li)     
//         dasheve.appendChild(dashli)              
// })
// })
const centloc=[]
function updateCentreSelect() {
    const centreSelect = document.getElementById("centreSelect")
    centreSelect.innerHTML = '<option value="" disabled selected>Select a Centre</option>'
    centloc.forEach(function (centre) {
        const option = document.createElement("option")
        option.value = centre
        option.textContent = centre
        centreSelect.appendChild(option)
    })
}
const volselect=[]
function updateVolunteerSelect() {
    const volunteerSelect = document.getElementById("volSelect")
    volunteerSelect.innerHTML = '<option value="" disabled selected>Assign Event</option>'
    volselect.forEach(function (volunteer) {
        const option = document.createElement("option")
        option.value = volunteer
        option.textContent = volunteer
        volunteerSelect.appendChild(option)
    })
}
centtime.addEventListener("submit", function(e) {
    e.preventDefault()
    const centre = document.getElementById("centreSelect").value
    const time = document.getElementById("centretimeat").value
    const date = document.getElementById("centredateat").value
    const ddate = new Date(date)
    const fdate = ddate.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' })
    centev.push(`${centre} - ${time} - ${fdate} <input type="submit" value="Completed" class="completedbtn"> <input type="submit" value="Remove" class="removebtn">`)
    centev.sort(function (a, b) {
        const eventA = a.split(" <input")[0].split(" - ")
        const eventB = b.split(" <input")[0].split(" - ")
        const dateA = eventA[eventA.length - 1].split("/").reverse().join("-")
        const dateB = eventB[eventB.length - 1].split("/").reverse().join("-")
        const timeA = eventA[eventA.length - 2]
        const timeB = eventB[eventB.length - 2]
        return dateA.localeCompare(dateB) || timeA.localeCompare(timeB)
    })
    console.log(centev)
    volselect.push(`${centre} - ${time} - ${fdate}`)
    updateVolunteerSelect()
    centeve.innerHTML = ""
    dasheve.innerHTML = ""
    centev.forEach(function (event) {
        const li = document.createElement("li")
        li.innerHTML = event
        const dashli = document.createElement("li")
        dashli.innerHTML = event.replace(/<input type="submit" value="Completed" class="completedbtn"> <input type="submit" value="Remove" class="removebtn">/g,"")
        centeve.appendChild(li)     
        dasheve.appendChild(dashli)              
})
})
const centdetail=[]
const centloli = document.getElementById("locationList")
const centreloc=document.getElementById("centreForm")
centreloc.addEventListener("submit", function(e) {
    e.preventDefault()
    const centre = document.getElementById("centreName").value
    centloc.push(centre)
    updateCentreSelect()
    const address = document.getElementById("centreAddress").value
    console.log(centloc)
    centdetail.push(`Centre: ${centre}, Address: ${address} <input type="submit" value="Remove" class="removebtn">`)
    centloli.innerHTML = ""
    centdetail.forEach(function (detail) {
        const li = document.createElement("li")
        li.innerHTML = detail
        centloli.appendChild(li)
        console.log(centloli)               
})
})
const used=document.getElementById("foodList")
used.addEventListener("click", function(e) {
    if (!e.target.classList.contains("usedbtn")) return
    const li = e.target.parentElement
    const index = Array.from(used.children).indexOf(li)
    foodsupp[index] = foodsupp[index].replace('<input type="submit" value="Used" class="usedbtn">',"Used")
    li.innerHTML = foodsupp[index]
    dashfoods.children[index].textContent = foodsupp[index].replace(/<input type="submit" value="Remove" class="removebtn">/g,"")
})
const completed=document.getElementById("eventList")
completed.addEventListener("click", function(e) {
    if (!e.target.classList.contains("completedbtn")) return
    const li = e.target.parentElement
    const index = Array.from(completed.children).indexOf(li)
    const eventName = centev[index].split(" <input")[0]
    centev[index] = centev[index].replace('<input type="submit" value="Completed" class="completedbtn">',"Completed")
    li.innerHTML = centev[index]
    volsun.forEach((volunteer, volunteerIndex) => {
    if (volunteer.includes(`assigned to: ${eventName}`)) {
        volsun[volunteerIndex] = volunteer.replace(`assigned to: ${eventName}`,`assigned to: ${eventName} Completed`)
        vols.children[volunteerIndex].innerHTML = volsun[volunteerIndex]
        dashvol.children[volunteerIndex].textContent = volsun[volunteerIndex].replace(/<input type="submit" value="Remove" class="removebtn">/g, "")
    }
})
    dasheve.children[index].textContent = centev[index].replace(/<input type="submit" value="Remove" class="removebtn">/g,"")
})
const removecentre=document.getElementById("locationList")
removecentre.addEventListener("click", function(e) {
    if (e.target.classList.contains("removebtn")) {
        const li = e.target.parentElement
        const index = Array.from(removecentre.children).indexOf(li)
        centloc.splice(index, 1)
        centdetail.splice(index, 1)
        li.remove()
        updateCentreSelect()
    }
})
const removetime=document.getElementById("eventList")
removetime.addEventListener("click", function(e) {
    if (e.target.classList.contains("removebtn")) {
        const li = e.target.parentElement
        const index = Array.from(removetime.children).indexOf(li)
        const name= centev[index].split(" <input")[0]
        centev.splice(index, 1)
        li.remove()
        dasheve.children[index].remove()
        const volunteerIndex = volselect.indexOf(name)
        if (volunteerIndex !== -1) {
            volselect.splice(index, 1)
            updateVolunteerSelect()
        }
    }
})
const removevol=document.getElementById("volunteerList")
removevol.addEventListener("click", function(e) {
    if (e.target.classList.contains("removebtn")) {
        const li = e.target.parentElement
        const index = Array.from(removevol.children).indexOf(li)
        volsun.splice(index, 1)
        li.remove()
        dashvol.children[index].remove()
    }
})
const removefood=document.getElementById("foodList")
removefood.addEventListener("click", function(e) {
    if (e.target.classList.contains("removebtn")) {
        const li = e.target.parentElement
        const index = Array.from(removefood.children).indexOf(li)
        foodsupp.splice(index, 1)
        li.remove()
        dashfoods.children[index].remove()
    }
})