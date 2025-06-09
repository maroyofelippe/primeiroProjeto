export interface IProduto{
    idProduto?: number;
    id?: number;
    nomeProduto: string;
    dataValidade: Date;
    precoProduto: number;
    promocao?: boolean;
    fotoPath?: string;
    fotoAlt?: string;
}

