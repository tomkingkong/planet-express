import {
  exoplanetCleaner,
  techCleaner
} from '.';

describe('exoplanetCleaner', () => {
  const mockPlanets = [
    { pl_discmethod: '', pl_pnum: 0, pl_hostname: '', pl_facility: '', pl_bmassj: '', pl_orbper: '', pl_name: '', st_dist: 10, pl_mnum: '' },
    { pl_discmethod: '', pl_pnum: 1, pl_hostname: '', pl_facility: '', pl_bmassj: '', pl_orbper: '', pl_name: '', st_dist: 10, pl_mnum: '' },
    { pl_discmethod: '', pl_pnum: 2, pl_hostname: '', pl_facility: '', pl_bmassj: '', pl_orbper: '', pl_name: '', st_dist: 10, pl_mnum: '' },
    { pl_discmethod: '', pl_pnum: 3, pl_hostname: '', pl_facility: '', pl_bmassj: '', pl_orbper: '', pl_name: '', st_dist: 10, pl_mnum: '' },
    { pl_discmethod: '', pl_pnum: 4, pl_hostname: '', pl_facility: '', pl_bmassj: '', pl_orbper: '', pl_name: '', st_dist: 10, pl_mnum: '' }
  ];

  it('should handle adding place indicators to planet numbers', () => {
    const cleanedPlanets = exoplanetCleaner(mockPlanets);
    expect(cleanedPlanets[0].numInSystem).toEqual(0);
    expect(cleanedPlanets[1].numInSystem).toEqual('1st');
    expect(cleanedPlanets[2].numInSystem).toEqual('2nd');
    expect(cleanedPlanets[3].numInSystem).toEqual('3rd');
    expect(cleanedPlanets[4].numInSystem).toEqual('4th');
  });
});

describe('techCleaner', () => {
  const mockTechs = [
    {
      project: {
        title: '',
        status: null,
        leadOrganization: name,
        pl_discmethod: null,
        description: `<p>words</p>`,
        primaryTas: {
          
        }
      }
    }
  ]

  it('should default to unknown if nothing exists', () => {
    const cleanTechs = techCleaner(mockTechs);
    expect(cleanTechs[0].status).toEqual('unknown');
    expect(cleanTechs[0].org).toEqual('unknown');
    expect(cleanTechs[0].discoveryMethod).toEqual('unknown');
    expect(cleanTechs[0].techAreas).toEqual([""]);
  });
});