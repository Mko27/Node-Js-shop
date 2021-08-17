const config = {
  PG: {
    CONNECTION_STRING_MAIN: "postgres://postgres:messi2001@localhost:5432/Test"
  },
  VALIDATIONS: {
      DEFAULT_OPTIONS: {
          abortEarly: true,
          allowUnknown: false,
          convert: true
        }
  }
}

module.exports = config;
