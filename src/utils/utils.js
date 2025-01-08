 const handleShare = ()=>{
    const shareData = {
      title:"Sumit Jadhav - Portfolio",
      text: "Check out my Portfolio!",
      url:window.location.href, //Current Page URL
    }

    if(navigator.share){
      navigator.share(shareData)
    .then(()=>{console.log('Content shared successfully')})
    .catch((error) => console.error('Error sharing content:', error));
    } else {
      // Fallback: Copy link to clipboard or show a message
      navigator.clipboard.writeText(shareData.url).then(() => {
        alert('Link copied to clipboard!');
      }).catch((err) => {
        console.error('Failed to copy link:', err);
      });
    }
  };

  export default handleShare;

  export const handleWhatsApp = () =>{
    const phoneNumber = "919029118331"; // Your phone number with country code
    const message = "Hello, I would like to know more about your services!";
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  }

  // export default handleWhatsApp;