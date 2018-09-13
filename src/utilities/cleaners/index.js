import $ from "jquery";

export const exoplanetCleaner = (planets) => {
  const planetImages = [
    'exoplanet_blue_1.png', 
    'exoplanet_blue_2.jpg', 
    'exoplanet_icy_1.png', 
    'exoplanet_rocky_1.png',
    'exoplanet_rocky_2.jpg'
  ]

  return planets.map(planet => {
    let numInSystem = planet.pl_pnum;
    if (numInSystem > 4) { numInSystem = numInSystem+'th' } else
    if (numInSystem === 3) { numInSystem = numInSystem+'rd' } else
    if (numInSystem === 2) { numInSystem = numInSystem+'nd' } else
    if (numInSystem === 1) { numInSystem = numInSystem+'st' }
    
    const planetImage = planetImages[(Math.random()*planetImages.length-1)+0.5<<0];
    return {
      name: planet.pl_name,
      mass: planet.pl_bmassj,
      image: `/images/alternative/${planetImage}`,
      distance: planet.st_dist,
      numInSystem: numInSystem,
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
    const techTags = technologyAreas.map(tech => tech.name.split(/(\band\b,)+g/));
    return {
      title: project.title,
      status: project.status || 'unknown',
      org: project.leadOrganization.name || 'unknown',
      discoveryMethod: project.pl_discmethod || 'unknown',
      techAreas: [].concat($.unique([techTags.join(',')])),
      // director: project.programDirectors.programDirector || 'unknown',
      benefits: $.parseHTML(project.benefits)[0].innerText,
      description: $.parseHTML(project.description)[0].innerText
    }
  })
}



//breakdown techAreas into tags
//clean html code, and split benefits
//clean html code from description