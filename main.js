//Use querySelector() to obtain a reference to that article DOM element.
const messagesBodyRef = document.querySelector("#messages")

let row = document.createElement("div")
//write to DOM
const sectionDOMBuilder = () => {
    
    //textContentArray
    const textContentArray = [
        {
            text: "What do you want for your birthday?"
        },    
        {
            text: "Money"
        },
        {
            text: "What do you want that I can buy you?"
        },
        {
            text: "Hundred dollar bill$"
        },
        {
            text: "You're getting a gift card. Deal with it."
        }
    ]
    // Create five (5) section elements, each with a class of message, and with textContent of your choosing.
    
    //use forEach to iterate over textContentArray
    textContentArray.forEach(
        currentSection = (text) => { //(text) is the object
            //console.log(text.text) //(text.text) is (object.key)
            //Create section element
            const list = document.createElement('section')
            
            //Create attribute for component element
            const listMessage = document.createAttribute('class')
            listMessage.value = 'message' //value of attribute 
            
            //Add the attribute to the component
            list.setAttributeNode(listMessage) //Entire attribute (with value) added to section element
            
            //Create a child component for section(s)
            const sms = document.createElement('p')
            sms.textContent = text.text
            //const smsClass = document.createAttribute('class')
            //smsClass.value = 'textMsg'
            //sms.setAttributeNode(smsClass) //this is what attaches the attribute (and value) to the created Element
            
            // Using appendChild(), attach each message as a child to the messages element.
            list.appendChild(sms)
            
            // console.log(list)
            
            //array of five stings with a forEach iterated over each string 
            
            row.appendChild(list)
            
            messagesBodyRef.appendChild(row)
        }
    )
}
sectionDOMBuilder()