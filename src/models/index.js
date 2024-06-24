const models = {
  userModel: require("./mongo/user/user.schema.js"),
  tracksModel: require("./mongo/tracks/tracks.schema"),
  storageModel: require("./mongo/storage/storage.schema.js"),
};

module.exports = models;
