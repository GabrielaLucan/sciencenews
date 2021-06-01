import mongoose from 'mongoose';

export default function initMongoose(MONGO_URL) {
  mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    autoIndex: true,
  }).catch((err) =>
    console.log('Eror while trying to connect to database: ', err)
  );

  const db = mongoose.connection;
  db.once('open', () => {
    console.log('Successfully connected to database!');
  });
}
