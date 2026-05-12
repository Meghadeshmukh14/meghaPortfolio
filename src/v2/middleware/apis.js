// const BASE_URL = "https://naveensarraf-apihub.vercel.app";
const BASE_URL = "https://meghadeshmukh-apihub.vercel.app";

export const sendSms = async (params) => {
    const url = BASE_URL + "/sms/sendSms";
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(params)
    });
    const data = await response.json();
    return data;
}
