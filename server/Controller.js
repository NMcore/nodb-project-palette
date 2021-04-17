const projects = [
  {
    id: 0,
    projectName: "Space Jam - Rollback to 1996",
    createdBy: "Nick",
    description: "Historical restoration project for landmark web site that was spacejam.com. We need to preserve these pristine early World Wide Wed artifacts for generations to come",
    notes:"note here",
    endDate: "1-23-12",
    color: [],
  },
  {
    id: 1,
    projectName: "Site Template Redo",
    createdBy: "Billie Eilish",
    description: "So you\'re a tough guy Like it really rough guy Just can\'t get enough guy Chest always so puffed guy",
    notes:"",
    endDate: "",    
    color: [],
  },
];


let id = 2;


module.exports = {
  read: (req, res) => {
    res.status(200).send(projects);
  },
  create: (req, res) => {
    const { projectName, createdBy, description, notes, endDate } = req.body;
    const newProject = {
      id,
      projectName,
      createdBy,
      description,
      notes,
      endDate,
      color: [],
    };
    id++;
    projects.push(newProject);

    res.status(200).send(projects);
  },

  update: (req, res) => {
    const { id } = req.params;
    const { projectName, createdBy, description, notes, endDate  } = req.body;

    const nameRecall = projects[id].projectName;
    const createdByRecall = projects[id].createdBy;
    const descriptionRecall = projects[id].description;
    const notesByRecall = projects[id].notes;
    const endDateecall = projects[id].endDate;    
    
    const colors = projects[id].color.map(color => color)
    // const index = projects.filter((project) => project.id == id)
    projects[id] = {
      id,
      projectName: projectName || nameRecall,
      createdBy: createdBy || createdByRecall,
      description: description || descriptionRecall,
      notes: notes || notesByRecall,
      endDate: endDate || endDateecall,
      color: colors,
    }
    res.status(200).send(projects);
  },

  remove: (req, res) => {
    const { id } = req.params;
    // const index = projects.findIndex((project) => project.id == id)
    projects.splice(id, 1)
    res.status(200).send(projects)

  },  

  updateColor: (req, res) => {
    const { id } = req.params;
    const { colorName, colorValue } = req.body;
    // const index = projects.findIndex((project) => project.id == id)
    projects[id].color.push({name:colorName, value: colorValue})
    res.status(200).send(projects);
  },

  removeColor: (req, res) => {
    const { id } = req.params;
    const { removeColor } = req.query;
    // const index = projects.findIndex((project) => project.id == id)
    const colorIndex = projects[id].color.findIndex(color => color.name == removeColor)
    projects[id]["color"].splice(colorIndex,1)
    res.status(200).send(projects)
  },  
};
