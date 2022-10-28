export class AccessDeniedError extends Error {
  constructor () {
    super('Acceso denegado!')
    this.name = 'AccessDeniedError'
  }
}
