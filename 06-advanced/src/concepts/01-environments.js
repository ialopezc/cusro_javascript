/**
 * 
 * @param {HTMLDivElement} element 
 */
export const environmentsComponent = (element) => {

    console.log(import.meta.env);

    const html = `
    Dev: ${import.meta.env.DEV} <br/>
    PROD: ${import.meta.env.PROD} <br/>
    VITE_API_KEY: ${import.meta.env.VITE_API_KEY} <br/>
    VITE_BASE_URL: ${import.meta.env.VITE_BASE_URL} <br/>
    `;

    element.innerHTML = html;
}