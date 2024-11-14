document.addEventListener('DOMContentLoaded',()=>{
    document.querySelector("#open").addEventListener('click',()=>{
        console.log("Open")
        document.querySelector('#myModal').classList.remove("hidden")
        document.querySelector('#myModal').classList.add("flex")
    }
);
document.querySelector("#close").addEventListener('click',()=>{
    console.log("Open")
    document.querySelector('#myModal').classList.remove("flex")
    document.querySelector('#myModal').classList.add("hidden")
}
);
document.querySelector("#modalBody").addEventListener('click',(e)=>{
    e.stopPropagation();
}
);

// Function to close the modal when clicking the close button or backdrop
document.querySelectorAll('.modal-close').forEach(button => {
    console.log(button)
    button.addEventListener('click', () => {
        console.log("backdrop clicked")
    //   document.getElementById('myModal').style.display = 'none';
      document.querySelector('#myModal').classList.remove("flex")
      document.querySelector('#myModal').classList.add("hidden")
    });
  });

  // Close modal if backdrop is clicked
  document.querySelectorAll('.bg-black').forEach(backdrop => {
    backdrop.addEventListener('click', () => {
    //   document.getElementById('myModal').style.display = 'none';
    document.querySelector('#myModal').classList.remove("flex")
    document.querySelector('#myModal').classList.add("hidden")
      console.log("backdrop clicked")
    });
});
})