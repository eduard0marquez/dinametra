const url = "https://api.spotify.com";
const token = "undefined";

export const getData = async (datos,complemento) => {
    try {
        const resp = await fetch(`${url}/${complemento}`, {
            method: "POST",
            body: JSON.stringify(datos),
            headers: {
               Authorization: `Bearer ${token}`,
            },
        });
        const data = await resp.json();
        return data;
    }
    catch (error) {
        console.error("Error:", error);
        return {msg: "Error en la solicitud con la API"};

    }
}