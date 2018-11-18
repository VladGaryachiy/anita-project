export interface ProductDataInterface {
    nameId?: string;
    typeId: string;
    type: string;
    brand: string;
    maker: string;
    about: string;
    bodyColor: string;
    colorFacade: string;
    country: string;
    id: number;
    image: string;
    material: string | MaterialInterface;
    name?: string;
    price: string;
    style: string;
    priceId: number;
    size?: SizeProductInterface;
    amount?: number;
}

interface MaterialInterface {
    storageWorehouse?: string;
    carcas?: string;
    seat?: string;
    legs?: string;
    counterTop: string;
}

interface SizeProductInterface {
    height?: string;
    width?: string;
    widthTable?: string;
    heightTale?: string;
    widthStool?: string;
    heightStool?: string;
}
