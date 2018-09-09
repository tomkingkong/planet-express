import $ from "jquery";

export const exoplanetCleaner = (planets) => {
  return planets.map(planet => {
    let placeInSystem = planet.numInSystem;
    switch(placeInSystem) {
      case placeInSystem > 4:
      placeInSystem + 'th'; 
      break;
      case placeInSystem === 3:
      placeInSystem + 'rd'; 
      break;
      case placeInSystem === 2:
      placeInSystem + 'nd'; 
      break;
      case placeInSystem === 1:
      placeInSystem + 'st'; 
      break;
      default:
      break;
    }
    return {
      name: planet.pl_name,
      mass: planet.pl_bmassj,
      distance: planet.st_dist,
      numInSystem: placeInSystem,
      yearLength: planet.pl_orbper,
      hostStar: planet.pl_hostname,
      numMoons: planet.pl_mnum || 0,
      discoveryBy: planet.pl_facility,
      discoveryMethod: planet.pl_discmethod
    }
  })
}

export const techCleaner = (technologies) => {
  return technologies.map(tech => {
    const { project } = tech;
    const technologyAreas = project.primaryTas.technologyAreas || [];
    const techTags = technologyAreas.map(tech => tech.name.split(/(\band\b\,)+g/));
    return {
      title: project.title,
      status: project.status,
      org: project.leadOrganization.name,
      discoveryMethod: project.pl_discmethod,
      techAreas: [].concat($.unique([techTags.join(',')])),
      director: project.programDirectors.programDirector,
      benefits: $.parseHTML(project.benefits)[0].innerText,
      description: $.parseHTML(project.description)[0].innerText
    }
  })
}



//breakdown techAreas into tags
//clean html code, and split benefits
//clean html code from description