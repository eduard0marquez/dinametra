const url = "https://api.nasa.gov/neo/rest/v1/feed";
const inicio = "2015-09-07";
const finalizacion= "2015-09-08";
const complemento = "NidmYzaSwjMuZ2lvIGwMdA3DZIpJt9LDDFPeK51n";

export const getData = async (datos) => {
    try {
        const resp = await fetch(`${url}?start_date=${inicio}&end_date=${finalizacion}&api_key=${complemento}`, {
            method: "GET",
            
        });
        const data = await resp.json();
        return data;
    }
    catch (error) {
        console.log(`${url}?start_date=${inicio}&end_date=${finalizacion}&api_key=${complemento}`);
        console.error("Error:", error);
        return { msg: "Error en la solicitud con la API" };
        

    }
}