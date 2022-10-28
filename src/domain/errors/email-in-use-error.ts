export class EmailInUseError extends Error {
  constructor () {
    super('el email ya esta en uso')
    this.name = 'EmailInUseError'
  }
}
