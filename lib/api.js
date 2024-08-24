export const sendContactforms = async (data) => fetch("api/contact", {
    method: "POST",
    body: JSON.stringify(data),
    header: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
});