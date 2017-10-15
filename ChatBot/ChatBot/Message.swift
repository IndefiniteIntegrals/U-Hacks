import Foundation

/// The type of message
enum MessageType {
    case question
    case answer
}

/// A conversation entry made by the user of the app
struct Message {
    let date: Date
    let text: String
    let type: MessageType
}

/// The welcoming text to display to open the conversation
let openingLine = Message(date: Date(), text: "Hello, I'm Buttler.\n I will help you find your job", type: .answer)
let message2 = Message(date : Date(), text : "What is your name ?" , type : .answer)
