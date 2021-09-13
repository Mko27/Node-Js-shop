const CUSTOM_ERRORS = [
  'ItemNotFoundError',
  'ValidationError',
  'PathNotFoundError',
  'ExistMailError',
  'CategoryDeleteError',
  'ExistNameError',
  'RegionDeleteError'
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
