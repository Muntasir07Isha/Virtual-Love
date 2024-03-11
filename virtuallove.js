const showLetterBtn = document.getElementById('showLetter');
const showPictureBtn = document.getElementById('showPicture');
const showInputBtn = document.getElementById('showInput');
const contentDiv = document.getElementById('content');


const displayLoveLetter = () => {

    contentDiv.innerHTML = `<p>My Dearest Isha,</p>
<p>I just wanted to take a moment to express how much you mean to me.</p>
<p>No Matter What it is I love you more than anything else in this universe</p> 
<p>Forever Yours,</p>
<br>Your Beloved Muntasir </p>`

};

const displayLovePicture = () => {
    contentDiv.innerHTML = `<img src="ishaa.jpg" alt="Love Picture">`;

};
const displayInput = () => {
    contentDiv.innerHTML = `<textarea id="customMessage" placeholder="Write something  you want and take a picture, send too me! <3"</textarea>`;
}



showLetterBtn.addEventListener('click', displayLoveLetter);
showPictureBtn.addEventListener('click',displayLovePicture);
showInputBtn.addEventListener('click',displayInput);
