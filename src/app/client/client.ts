export interface Client{
    id: number;
    nom: string;
    prenom:string;
    login:string;
    mdp:string;
    conseiller: Conseiller;
}