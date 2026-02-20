// const BASE_URL = "https://naveensarraf-apihub.vercel.app";
const BASE_URL = "https://meghadeshmukh-apihub.vercel.app";

export const sendMailOtp = async (params) => {
    const url = BASE_URL + "/mailer/sendMailOtp";
    const response = await fetch(url,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        }
    );
    const data = await response.json();
    return data;
}


export const sendMailService = async (params) => {
    const url = BASE_URL + "/mailer/sendMailService";
    const response = await fetch(url,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        }
    );
    const data = await response.json();
    return data;
}