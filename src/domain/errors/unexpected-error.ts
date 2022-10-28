export class UnexpectedError extends Error {
  constructor () {
    super('Ha ocurrido un error inesperado. Inente nuevamente')
    this.name = 'UnexpectedError'
  }
}


// export class UnexpectedError extends Error {
//   readonly type = "UnexpectedError" as const;
// }