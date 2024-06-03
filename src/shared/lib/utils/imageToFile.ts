// export async function cloudImageToFile(url:string, filename: string) {
//     try {
//         const response = await fetch(url);
//         const blob = await response.blob();
//
//         const file = new File([blob], filename, { type: blob.type });
//
//         return file;
//     } catch (error) {
//         console.error('Ошибка', error);
//         return null;
//     }
// }


export const cloudImageToFile = async (url: string, filename: string) => {
    const response = await fetch(url);
    const blob = await response.blob();

    return new File([blob], filename, { type: blob.type });
}


// const fileToURL = (file: File) => {
//     return URL.createObjectURL(file);
// }
//
//
// export const urlToFile = async (url: string, filename: string) => {
//     const response = await fetch(url);
//     const blob = await response.blob();
//
//     return new File([blob], filename, { type: blob.type });
// }
//
//
// export const processImage = async (cloudImageUrl: string, filename: string) => {
//     const file = await cloudImageToFile(cloudImageUrl, filename);
//     const fileURL = fileToURL(file);
//     const newFile = await urlToFile(fileURL, filename);
//
//     return newFile;
// }
