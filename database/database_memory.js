const { randomUUID } = require("crypto");
// DatabaseMemory class
class DatabaseMemory {
 // Initialize message map
 #message = new Map();

 // List all messages
 list() {
    // Convert message entries to array
    return Array.from(this.#message.entries()).map(msg => {
      // Extract message id and data
      const msgId = msg[0];
      const msgData = msg[1];
      // Return message object with id and data
      return {
        id: msgId, 
        ...msgData 
      };
    });
 }

 // Create a new message
 create(message) {
    // Generate random message id
    const msgId = randomUUID();
    // Add message to message map
     this.#message.set(msgId, message);
 }

 // Update an existing message
 update(messageId, message) {
    // Update message in message map
   return this.#message.set(messageId, message);
 }

 // Delete a message
 delete(messageId) {
    // Remove message from message map
    return this.#message.delete(messageId);
 }
}
module.exports = DatabaseMemory