const GOOGLE_API_KEY = 'AIzaSyAvjuOBEJHD8YBAjjYJ5i9wJQ4wJiM15Ns';

export const getmapPreview = (lat:number,lng:number) => {
    const imgPreviewURL = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=13&size=400x200&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C${lat},${lng}&key=${GOOGLE_API_KEY}`
    return imgPreviewURL
}