const projects = [
  {
    id: 0,
    projectName: "Most Excellent Website from the future",
    createdBy: "Bill S. Preston, Esq",
    description: "Create the most excellent website ever made to unite the world. Possibly similar to the landmark website spacejam.com.",
    notes: "Why is the future not as great as the '80s?",
    endDate: "1-23-1989",
    color: [],
  },
  {
    id: 1,
    projectName: "It's computers...",
    createdBy: "Ted Theodore Logan",
    description: "Everything is different, but the same... things are more moderner than before... bigger, and yet smaller... it's computers... ",
    notes: "",
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
    const { projectName, createdBy, description, notes, endDate } = req.body;
    const nameRecall = projects[id].projectName;
    const createdByRecall = projects[id].createdBy;
    const descriptionRecall = projects[id].description;
    const notesByRecall = projects[id].notes;
    const endDateecall = projects[id].endDate;

    const colors = projects[id].color.map(color => color)
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
    projects.splice(id, 1)
    res.status(200).send(projects)

  },

  updateColor: (req, res) => {
    const { id } = req.params;
    const { colorName, colorValue } = req.body;
    projects[id].color.push({ name: colorName, value: colorValue })
    res.status(200).send(projects);
  },

  removeColor: (req, res) => {
    const { id } = req.params;
    const { removeColor } = req.query;
    const colorIndex = projects[id].color.findIndex(color => color.name == removeColor)
    projects[id]["color"].splice(colorIndex, 1)
    res.status(200).send(projects)
  },
};
