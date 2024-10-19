const btnSubmit = document.getElementById('submit'); 
const rateButtons = document.querySelectorAll('.rating.bottomSpacing .rate');
const rateResult = document.querySelector('.selectedRate.spacer p');
const header = document.getElementsByTagName('header')[0];
const section = document.getElementsByTagName('section')[0];
const footer = document.getElementsByTagName('footer')[0];
const cardContainer = document.querySelector('.cardContainer');

document.addEventListener('DOMContentLoaded',()=>{

let results = '';




    rateButtons.forEach((btn,id) => {
        btn.style.backgroundColor='';  // background-color: #262E38;
        id = id + 1; 
        
        btn.addEventListener('click',()=>{
           
           
            rateButtons.forEach((btn) => {
                btn.style.backgroundColor=''; 
                btn.style.color=''; 
                
            });
            
            
            btn.style.backgroundColor='white'; 
            btn.style.color='black'; 
            // alert( `${id} out of ${rateButtons.length}`);
             results = `You selected ${id} out of 5`;
            
        });
    });


    btnSubmit.addEventListener('click', ()=>{

        if(!results){
            alert('must give a rating'); 
        }else{

        

        
        rateResult.innerHTML = results;
        header.classList.add('ratehider');
        section.classList.add('ratehider');
        footer.classList.add('ratehider');
        cardContainer.classList.remove('ratehider');
        }
    
    });

});