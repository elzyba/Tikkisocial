const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 1000,
  jwtSecret: process.env.JWT_SECRET || "stjh47aniof87gfjdnbgjbvh36fjbew4r7fnmbHI8rj0hyg",
  // mongoUri: process.env.MONGODB_URI ||
  //   process.env.MONGO_HOST ||
  //   'mongodb://' + (process.env.IP || 'localhost') + ':' +
  //   (process.env.MONGO_PORT || '27017') +
  //   '/social',

mongoUri:"mongodb+srv://marie23:marie123@cluster0.70uwg.mongodb.net/tikkisocial?retryWrites=true&w=majority",

 
}

export default config
