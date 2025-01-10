import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '../../../.env') });

const connectDB = async () => {
  try {
    const dbName = process.env.DB_NAME;
    const MONGODB_URI = process.env.MONGODB_URI;

    await mongoose.connect( 
      MONGODB_URI!, { dbName }
    // await mongoose.connect( 'mongodb://localhost:27017/vidhvaa'
      // MONGODB_URI!, { dbName }  mongodb://localhost:27017/        mongodb+srv://malik:test123@cluster0.08k3zih.mongodb.net/?retryWrites=true&w=majority
    );
    // const master_category = await createOrUpdateCategories();
    // console.log('master_category: ', master_category);
    // master_category ? 'Categories have been successfully updated' : '';
    console.log('db connected...');
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
    process.exit(1);
  }
};

export default connectDB;
 