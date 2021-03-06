const allProjectsHTML = document.querySelector('.projects-body__projects');


// loop through projects
fetch('../projects/projects.json')
  .then(res => res.json())
  .then(data => {
    data.map(project => {
      allProjectsHTML.innerHTML += `
      <div class='projects-body__projects__project'>
        <div class='projects-body__projects__project-wrap'>
          <h3>${project.title}</h3>
          <img src='../${project.img}'>
          <p>${project.text}</p>
        </div>
        <a class='projects-page__button' href='${project.link}' target=_blank>view project</a>
      </div>
      `
    })
  })