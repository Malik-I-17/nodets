import { appSetting } from '../models/AppSetting.model'


export const createAppSetting = async (Data: any) => {

    const appData = await appSetting.create(Data);
    return appData

}

export const updateAppSetting = async (Data: any) => {
    const appData = await appSetting.updateOne(
        { app_type: Data.app_type },
        { $set: Data }
    )
    return appData;
}


export const listAppSetting = async (Data: any) => {
    const appData = await appSetting.findOne({
        app_type: Data
    })
    return appData;
}

