import Foundation
class ConversationDataSource {
    
    /// The number of Messages in the conversation
    var messageCount = 2
    var messages = [openingLine,message2]
    

    /// Add a new question to the conversation
    func add(question: String) {
        let message = Message(date : Date(), text : question , type : .question)
        
        messages.append(message)
        
        print("Asked to add question: \(question)")
        messageCount += 1
    }
    
    /// Add a new answer to the conversation
    func add(answer: String) {
        let message = Message(date : Date(), text : answer , type : .answer)
        
        messages.append(message)
        print("Asked to add answer: \(answer)")
        return messageCount += 1
    }
    
    /// The Message at a specific point in the conversation
    func messageAt(index: Int) -> Message {
        print("Asking for message at index \(index)")
       return messages[index]
    }
}
