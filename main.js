var courseAPI = 'http://localhost:3000/course'
function start(){
    getCourses(renderCourse)
    handleCreaeForm()
 }
 // begin app 
start()

function getCourses(callback){
    fetch(courseAPI)
        .then(response => response.json())
        .then(callback)
 }
function createCourse(data){
    
}
function renderCourse(courses){
    var listCoursesBlock = document.querySelector('#list-courses')
    var html = courses.map(function (course){
        return `
            <li>
                <h4>${course.name}</h4>
                <p>${course.description}</p>
            </li>
        `
    })
    listCoursesBlock.innerHTML = html.join('')
}
function handleCreaeForm(){
    var createBtn = document.querySelector('#create')
    createBtn.onclick = function(){
        var name = document.querySelector('input[name="name"]').value
        var description = document.querySelector('input[name="description"]').value
    }
}