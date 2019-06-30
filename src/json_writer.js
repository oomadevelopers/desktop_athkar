const _fs = require('fs');

// Later this class will be used to take json data of all notifications of the local file from this project and copy it to user enviorment new local file
// so it will be used instead of the current local file in order to let the user to delete and add new notification without any limitation
function JsonWriter (writeFullFilePath) {
    this.writeFullFilePath = writeFullFilePath;
    this.writeDataToFile();

}


JsonWriter.prototype.writeDataToFile = function() {
    
}

module.exports = JsonWriter;