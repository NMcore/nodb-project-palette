
const dogs = [{
  name: 'Spot',
  breed: 'Pug',
  age: 5,
  image: 'https://pawleaks.com/wp-content/uploads/2020/08/Pug-in-bed.png',
  bio: 'Loves to sleep with her pet tiger, but only after you tuck her in.',
  id: 1,
  isFavorite: false,
}];

let id = 2;


module.exports = {
  getDogs: (req, res) => {
    console.log('YOU MADE THE REQUEST SUCCESSFULLY!');
    res.status(200).send(dogs);
  },


  
  addDog: (req, res) => {
    const {
      name,
      breed,
      age,
      image,
      bio
    } = req.body;

    const newDog = {
      name,
      breed,
      age,
      image,
      bio,
      isFavorite: false,
      id,
    }

    id++;

    dogs.push(newDog);

    res.status(200).send(dogs);
  }
}