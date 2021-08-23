const CUSTOM_ERRORS = [
  'ItemNotFoundError',
  'ValidationError',
  'PathNotFoundError',
  'UsedMailError'
]

const ERRORS = CUSTOM_ERRORS.reduce((acc, className) => {
  console.log('**********', className)
  acc[className] = ({
    [className]: class extends Error {
      constructor (msg) {
        super(msg)
        this.name = this.constructor.name
      }
    }
  })[className]

  return acc
}, {})

console.log('/////////////', ERRORS)

module.exports = ERRORS
