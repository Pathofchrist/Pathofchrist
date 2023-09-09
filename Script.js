// Function to open "readtest.html" in another page
        function openReadTestInNewPage() {
            // Specify the URL of the "readtest.html" file
            var targetUrl = 'readtest.html';

            // Open "readtest.html" in a new page
            window.open(targetUrl, '_blank');
        }

        // Attach a click event listener to the button
        document.getElementById('tbt').addEventListener('click', openReadTestInNewPage);
// Function to open "uploadtest.html" in another page
function openUploadTestInNewPage() {
    // Specify the URL of the "uploadtest.html" file
    var targetUrl = 'uploadtest.html';

    // Open "uploadtest.html" in a new page
    window.open(targetUrl, '_blank');
}

// Attach a click event listener to the button with id "tstb"
document.getElementById('tstb').addEventListener('click', openUploadTestInNewPage);

// Function to open "teach.html" in another page
function openteachInNewPage() {
    // Specify the URL of the "teach.html" file
    var targetUrl = 'teach.html';

    // Open "teach.html" in a new page
    window.open(targetUrl, '_blank');
}

// Attach a click event listener to the button with id "tstb"
document.getElementById('tebt').addEventListener('click', openteachInNewPage);

// Function to open "teach.html" in another page
function openHomeInNewPage() {
    // Specify the URL of the "index.html" file
    var targetUrl = 'index.html';

    // Open "Home.html" in a new page
    window.open(targetUrl, '_blank');
}

// Attach a click event listener to the button with id "Home"
document.getElementById('Home').addEventListener('click', openHomeInNewPage);

// Function to open "about.html" in another page
function openaboutInNewPage() {
    // Specify the URL of the "about.html" file
    var targetUrl = 'about.html';

    // Open "about.html" in a new page
    window.open(targetUrl, '_blank');
}

// Attach a click event listener to the button with id "about"
document.getElementById('About').addEventListener('click', openaboutInNewPage);

// Function to open "Contact.html" in another page
function openContactInNewPage() {
    // Specify the URL of the "Contact.html" file
    var targetUrl = 'Contact.html';

    // Open "Contact.html" in a new page
    window.open(targetUrl, '_blank');
}

// Attach a click event listener to the button with id "Contact"
document.getElementById('Contact').addEventListener('click', openContactInNewPage);