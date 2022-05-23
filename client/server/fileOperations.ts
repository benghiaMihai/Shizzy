import {readFile, writeFile} from 'fs/promises'
interface IShoes {
    id:number;
    name:string;
    brand:string;
    price: number;
}

export const getAll = async(): Promise<IShoes[]> =>{
    const buffer = await readFile('./products.json',{
        encoding: 'utf-8'
    })

    return JSON.parse(buffer)
}

export const getById = async(id:number): Promise<IShoes> => {
    const shoeList = await getAll();
    const shoe = Array.isArray(shoeList ) ?shoeList.find(shoe => shoe.id === id): '';
    if(shoe){
        return shoe
    }else{
        throw Error(`There is no shoes with id ${id}`)
    }
}

export const add = async (shoe: IShoes) => {
    const shoeList = await getAll();

    await writeFile('./products.json', JSON.stringify([...shoeList, shoe]))
}

export const removeById = async (id: number) => {
    const shoeList =  await getAll();
    const shoes = shoeList.filter(shoe => shoe.id !== id);
    await writeFile('./products.json', JSON.stringify(shoes))
}

export const update = async (shoe: Partial<IShoes>) => {
    if(!shoe.id){
        throw Error('You need to pass an id!')
    }
    const shoeToUpdate = await getById(shoe.id);
    const updatedShoe = {...shoeToUpdate, ...shoe}
    await removeById(shoe.id);
    await add(updatedShoe);
}
