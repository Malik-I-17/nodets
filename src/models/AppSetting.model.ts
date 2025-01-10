import mongoose, { Document, Schema } from "mongoose";

export interface Appmodel extends Document {

    app_type: string,
    app_version: string,
    update_title: string,
    update_message: string,
    update_force: string,
    status: string,
    share_content: string,
    app_status: string

}


const appModelSchema = new Schema<Appmodel>({

    app_type: { type: String },
    app_version: { type: String },
    update_title: { type: String },
    update_message: { type: String },
    update_force: { type: String },
    status: { type: String },
    share_content: { type: String },
    app_status: { type: String },

},
    {
        timestamps: true
    })


export const appSetting = mongoose.model<Appmodel>("app_setting", appModelSchema)