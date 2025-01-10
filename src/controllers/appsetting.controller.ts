import { Request, Response, NextFunction } from "express";
import { createAppSetting, updateAppSetting, listAppSetting } from "../service/appsetting.service";
import { ApiResponse } from '../utils/hooks/util';
import { getUsers } from "../service/user.service";

export const createAPP = async (req: Request, res: Response) => {

    try {

        const appData = req.body
        const Data = await createAppSetting(appData)
        return ApiResponse(res, {
            status: 201,
            message: "appsetting created successfully",
            validation: null,
            totalCount: null,
            data: Data,
        });
    }
    catch (error: any) {
        return ApiResponse(res, {
            status: 500,
            message: error.message,
            validation: error.validation,
            totalCount: null,
            data: null
        })
    }

}

export const updateApp = async (req: Request, res: Response) => {

    try {

        const appData = req.body;
        const Data = await updateAppSetting(appData)

        return ApiResponse(res, {
            status: 201,
            message: "appsetting updated successfully",
            validation: null,
            totalCount: null,
            data: Data,
        });
    }
    catch (error: any) {
        return ApiResponse(res, {
            status: 500,
            message: error.message,
            validation: error.validation,
            totalCount: null,
            data: null
        })
    }
}


export const listApp = async (req: Request, res: Response) => {

    try {

        const type = req.query.type
        const Data = await listAppSetting(type)

        return ApiResponse(res, {
            status: 201,
            message: "appsetting updated successfully",
            validation: null,
            totalCount: null,
            data: Data,
        });
    }
    catch (error: any) {
        return ApiResponse(res, {
            status: 500,
            message: error.message,
            validation: error.validation,
            totalCount: null,
            data: null,
        });
    }
}



export const app = async (req: Request, res: Response) => {

    try {

        const user_id = req.headers.user_id;
        const appType = req.headers['apptype']
        const appVerson = req.headers['app-version'] as string
        let data = {
            Title: 'New Update Available',
            Message: 'We have some improvements',
            UpdateAvailable: false,
            ForceUpdate: 0,
            userDetails: {}, // Initialize userDetails here
        };

        // const [userData, appData] = await Promise.all([
        //     await getUsers(user_id),
        //     await listAppSetting(appType)
        // ])
        const userData = await getUsers(user_id)
        const appData = await listAppSetting(appType)

        if (appData) {

            if (parseInt(appData.app_version) > parseInt(appVerson)) {
                data.Title = appData.update_title
                data.Message = appData.update_message
                data.UpdateAvailable = true
                    data.ForceUpdate = 1
            }
        }

        data.userDetails = {
            user_name: userData?.user_name,
            user_level: userData?.user_type === 'paid' ? 2 : 1,
            user_type: userData?.user_type,
            user_mpin: userData?.user_mpin || " ",
            SupportNumber: "7854216398",
            user_code: userData?.user_code,
        }

        return ApiResponse(res, {
            status: 201,
            message: "appsetting updated successfully..",
            validation: null,
            totalCount: null,
            data: data,
        });


    }
    catch (error: any) {
        return ApiResponse(res, {
            status: 500,
            message: error.message,
            validation: error.validation,
            totalCount: null,
            data: null
        })
    }
}