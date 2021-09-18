function copyToClipboard() {
    var copyText = "haidarficoi@gmail.com";
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the text: " + copyText.value);
  }