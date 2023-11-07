export interface IModelParams<TFields> {
  fields: TFields;
  idField: keyof TFields;
}

export abstract class Model<TFields extends object> {
  private _fields: TFields;
  private _idField: keyof TFields;

  constructor(params: IModelParams<TFields>) {
    this._fields = params.fields;
    this._idField = params.idField;
  }

  get(key: keyof TFields) {
    return this._fields[key];
  }

  getID() {
    return this._fields[this._idField];
  }
}