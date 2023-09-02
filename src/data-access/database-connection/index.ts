import mongoose from 'mongoose';

export async function connectToDatabase(MONGODB_URI: string) {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Database Connected');
  } catch (error) {
    console.error('Error no database connection');
    console.error(error);
  }
}
