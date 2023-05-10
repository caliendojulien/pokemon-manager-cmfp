export class Pokemon {

  private _id: number;
  private _nom: string;
  private _categories: string[];
  private _poids: number;
  private _taille: number;
  private _types: string[];
  private _image: string;

  constructor(id: number, nom: string, categories: string[], poids: number, taille: number, types: string[], image: string) {
    this._id = id;
    this._nom = nom;
    this._categories = categories;
    this._poids = poids;
    this._taille = taille;
    this._types = types;
    this._image = image;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get categories(): string[] {
    return this._categories;
  }

  set categories(value: string[]) {
    this._categories = value;
  }

  get poids(): number {
    return this._poids;
  }

  set poids(value: number) {
    this._poids = value;
  }

  get taille(): number {
    return this._taille;
  }

  set taille(value: number) {
    this._taille = value;
  }

  get types(): string[] {
    return this._types;
  }

  set types(value: string[]) {
    this._types = value;
  }

  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
  }
}
