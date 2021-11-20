let config = {
    dbUrl: process.env.DBURL || "mongodb+srv://test1234:test1234@cluster0.wcdpm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    port: process.env.PORT || 4000,
    env: process.env.NODE_ENV || "development",
    logDir: process.env.LOGDIR || "logs",
    viewEngine: process.env.VIEW_ENGINE || "html"
  };
  
export = config;
  