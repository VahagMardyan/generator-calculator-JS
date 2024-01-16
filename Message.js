const createMessage = (message) => {

    const messageSection = document.createElement('section');
    document.body.append(messageSection);

    const messageBox = document.createElement('div');
    messageBox.className = 'message-box disappear';

    const span = document.createElement('span');
    span.innerText = message;

    messageBox.append(span);

    messageSection.append(messageBox);

    setTimeout(() => {
        document.body.removeChild(messageSection);
    }, 4000);

}

export default createMessage;