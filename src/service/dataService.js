
export const dataObj={
    storedBreeds :[],
    filteredBreeds:[],
    breedGroup:[]
}




export async function getListOfDogs(){
    let result = await fetch("https://api.thedogapi.com/v1/breeds",{headers:{
        "x-api-key":"live_ZvjKBz9II6xtE16IttTtteL9aYlgpM15lpAIcDEwL6RfioKC9uVSzneuV5qfC3GV"
    }});
    return await result.json();
}

export async function getDogPictures (dogid){
    console.log("getDogPictures",dogid)
    let resultPromise = await fetch("https://api.thedogapi.com/v1/images/search?limit=5&breed_ids="+dogid,{headers:{
        "x-api-key":"live_ZvjKBz9II6xtE16IttTtteL9aYlgpM15lpAIcDEwL6RfioKC9uVSzneuV5qfC3GV"
    }});
    let result =  await resultPromise.json();

    return result.map((element)=>element.url)

}