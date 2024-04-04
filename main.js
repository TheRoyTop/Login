 document.addEventListener("click", function(){
   const Button = document.querySelector("#ButtonUp");
   const ButtonLogin = document.querySelector(".Button-Login");
  
  Button.addEventListener("click", function(){
    const Name = document.querySelector(".Title");
    const DivRegit = document.querySelector(".Registre");
    const InputGmail = document.querySelector(".InputGmail");
    const Rest = document.querySelector(".Res-Password");
    const ButtonUp = document.querySelector(".Sing-Up");
    const ButtonLog = document.querySelector(".Span-Sing");
    const ButtonSing = document.querySelector(".Button-Login");
    
    Name.textContent = 'SING UP';
    
    ButtonUp.textContent = `Already have an accont?`;
    ButtonLog.textContent = "LOGIN";
    DivRegit.style.height = "200px";
    Rest.style.display = "none";
    ButtonSing.textContent = "SING UP";
    ButtonSing.style.padding = "0.5rem 0"
    ButtonSing.style.margin = "5px";
    InputGmail.style.display = "flex";
   }
  );
  ButtonLogin.addEventListener("click", function(){
    window.location.href = "registro.html";
  })
 })