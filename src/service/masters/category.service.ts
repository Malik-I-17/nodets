import { Category } from "../../models/master/Category.model";

export const Createcategory = async (sampleData: any) => {
    // const newUser = new Sample(sampleData);
    // const savedUser = await newUser.save();

    const savedUser = await Category.create(sampleData);
    return savedUser;
};
