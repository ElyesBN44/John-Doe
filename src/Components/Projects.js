
import projects from "./data";
function Proj(){

 
    return(
        <section id="projects">
      <h2 class="text-important">Projects</h2>
      <div class="projects-container">
       
      {
      projects.map((el)=>(<div class="project-card">
      <img src={el.imgg} alt="project" />
      <h3> {el.titre} </h3>
      <p>
        {el.descri}
      </p>
      <p><a href="#">Github Link</a></p>
    </div>))
     }
      
      
      </div>
    </section>
    );
}
export default Proj;