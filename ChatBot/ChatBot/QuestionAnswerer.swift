
struct QuestionAnswerer {
    /// Creates a String in response to another String.
    func responseTo(question: String,mc count : Int) -> String {
        
        switch count {
        case 2:
            return "Where can I contact you? Enter an E-Mail Address"
        case 4:
            return "What position are you looking to work for? e.g. Software Developer ?"
        case 6:
            return "Do you have any experience? If Yes, Please enter in years. ( 0 if none )"
        case 8:
            return "Moving somewhere? Where are you looking to find a new job?"
        case 10:
            return "Where did you graduate from?"
        case 12:
            return "Tell me your top 5 skills seperated by comma(s) e.g. skill : level. ( level must be 0-5 )"
        case 14:
            return "Thank you , Now your details will be authenticated by touch id......."
        default:
            return ""
        }
     
    }
}
