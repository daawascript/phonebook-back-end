require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const Contact = require('./models/contact');

const app = express();

// use static build
app.use(express.static('build'));
// JSON parser
app.use(express.json());
// log request body
morgan.token('body', req => JSON.stringify(req.body));
app.use(morgan(':method :url :response-time ms :body'));
// allow for Cross Origin Ressource Sharing
app.use(cors());

// add new contact to the list
app.post('/api/persons', (req, res, next) => {
  const body = req.body;

  // create contact object to then add in new array
  const contact = new Contact({
    name: body.name,
    number: body.number,
  });

  contact
    .save()
    .then(savedPerson => {
      res.json(savedPerson.toJSON());
    })
    .catch(err => next(err));
});
// const unkownEndpoint = (req, res) => {
//   res.status(404).send({ error: 'unknown endpoint' });
// };

// app.use(unkownEndpoint);

const errorHandler = (error, request, response, next) => {
  console.error(error.message);

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' });
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message });
  }

  next(error);
};

app.use(errorHandler);

// get contact list
app.get('/api/persons', (req, res) => {
  Contact.find({}).then(contacts => {
    res.json(contacts);
  });
});

// get specific contact
app.get('/api/persons/:id', (req, res, next) => {
  Contact.findById(req.params.id)
    .then(contact => (contact ? res.json(contact) : res.status(404).end()))
    .catch(err => next(err));
});

// get info page with number of contacts in phonebook
app.get('/info', (req, res) => {
  res.send(`<p>Phonebook has info for ${Contact.length} people</p> 
  <p>${new Date()}</p>`);
});

// delete specific contact
app.delete('/api/persons/:id', (req, res, next) => {
  Contact.findByIdAndRemove(req.params.id)
    .then(() => {
      res.status(204).end();
    })
    .catch(err => next(err));
});

// update contact's number if already present in the db
app.put('/api/persons/:id', (req, res, next) => {
  const body = req.body;

  const contact = {
    name: body.name,
    number: body.number,
  };
  Contact.findByIdAndUpdate(req.params.id, contact, {
    new: true,
    runValidators: true,
    context: 'query',
  })
    .then(updatedContact => res.json(updatedContact))
    .catch(err => next(err));
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// exampple of a request logger middleware
// const requestLogger = (request, response, next) => {
//   console.log('Method:', request.method);
//   console.log('Path:  ', request.path);
//   console.log('Body:  ', request.body);
//   console.log('---');
//   next();
// };

// app.use(requestLogger);
