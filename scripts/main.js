//hamberg navbar 

const navbarLists=document.getElementById('navlists');
let hamberg=document.querySelector('.ri-menu-4-line');
let isShouldOpen=false;
let close=document.querySelector('.fa-rectangle-xmark');
hamberg.addEventListener('click',()=>{ 
    hamberg.classList.remove('ri-menu-4-line');
    close.classList.add('return-xmark');
    navbarLists.classList.add('navbar-lists-visible');
})

close.addEventListener('click',()=>{
    close.classList.remove('return-xmark');
    hamberg.classList.add('ri-menu-4-line');
    navbarLists.classList.remove('navbar-lists-visible');
})

//dark and light mode switch

const navbarMode=document.getElementById('navbar');
const triangleLogo=document.querySelector('.ri-triangle-fill');
const verselTitle=document.querySelector('.logo-title')
const potraitNavbarLoginButton=document.querySelector('.login-mobile-button');
const bodyBackgroundColor=document.getElementById('site-body');
const navbarListsPTags=document.querySelectorAll('.plain-navbar-lists');
const boldTag=document.querySelectorAll('b');
const strongTag=document.querySelectorAll('strong');
const formBackgroundColor=document.querySelectorAll('form');
const formLabelColor=document.querySelectorAll('label');
const inputBackgroundColor=document.querySelectorAll('input');
const selectBackgroundColor=document.querySelectorAll('select');
const textAreaBackgroundColor=document.querySelectorAll('textarea');
const darkMoonMode=document.querySelectorAll('.ri-moon-fill');
const footerExtendLists=document.querySelectorAll('.footer-list');
const footerSocialIcons=document.querySelectorAll('.social-icon');
let isclicked=false;




darkMoonMode.forEach(icon=>{ 
icon.addEventListener('click',()=>{
  
hamberg.style.color='white';
close.style.color='white';
bodyBackgroundColor.classList.add('body-darkmode');
bodyBackgroundColor.classList.remove('body-site');

triangleLogo.style.color='white'
navbarMode.style.backgroundColor='black';


navbarListsPTags.forEach(element=>{
    element.style.color='white';
})

strongTag.forEach(element=>{
    element.style.color='white';
})
boldTag.forEach(element=>{
    element.style.color='white';
})

verselTitle.style.color='white';
navbarLists.style.color='white';
potraitNavbarLoginButton.style.backgroundColor='#242424';

formBackgroundColor.forEach(forms=>{ 
forms.style.backgroundColor='#242424';
})

inputBackgroundColor.forEach(inputs=>{
    inputs.style.backgroundColor='black';
})

selectBackgroundColor.forEach(selects=>{
    selects.style.backgroundColor='black';
})

textAreaBackgroundColor.forEach(textarea=>{
   textarea.style.backgroundColor='black'; 
})

footerExtendLists.forEach(list=>{
    list.addEventListener('mouseover',()=>{
        list.style.color='white';
    })
})

footerExtendLists.forEach(lists=>{
    lists.addEventListener('mouseout',()=>{
        lists.style.color='gray';
    })
})

footerSocialIcons.forEach(list=>{
    list.addEventListener('mouseover',()=>{
        list.style.color='white';
    })
})
footerSocialIcons.forEach(list=>{
    list.addEventListener('mouseout',()=>{
        list.style.color='gray';
    })
})


})
})


const sunIconLightMode=document.querySelectorAll('.ri-sun-fill');

sunIconLightMode.forEach(icon=>{ 

icon.addEventListener('click',()=>{

hamberg.style.color='black';
close.style.color='black';
bodyBackgroundColor.classList.add('body-site');
bodyBackgroundColor.classList.remove('body-darkmode');


verselTitle.style.color='black';
triangleLogo.style.color='black';

navbarMode.style.backgroundColor='#F7F7F7';
navbarLists.style.color='black';

navbarListsPTags.forEach(element=>{
    element.style.color='black';
})

strongTag.forEach(element=>{
    element.style.color='black';
})
boldTag.forEach(element=>{
    element.style.color='black';
})

potraitNavbarLoginButton.style.backgroundColor='black';

formBackgroundColor.forEach(forms=>{ 
forms.style.backgroundColor='white';
})



inputBackgroundColor.forEach(inputs=>{
    inputs.style.backgroundColor='white';
})

selectBackgroundColor.forEach(selects=>{
    selects.style.backgroundColor='white';
})

textAreaBackgroundColor.forEach(textareas=>{ 
    textareas.style.backgroundColor='white';
})

footerExtendLists.forEach(list=>{
    list.addEventListener('mouseover',()=>{
        list.style.color='black';
    })
})

footerExtendLists.forEach(lists=>{
    lists.addEventListener('mouseout',()=>{
        lists.style.color='gray';
    })
})

footerSocialIcons.forEach(list=>{
    list.addEventListener('mouseover',()=>{
        list.style.color='black';
    })
})
footerSocialIcons.forEach(list=>{
    list.addEventListener('mouseout',()=>{
        list.style.color='gray';
    })
})

})
})


//form validation

const emailInput=document.querySelectorAll('.emailinput');
const emailPattern=/^[a-zA-Z0-9\.\_\-]+\@[a-zA-Z0-9\.\-\_]+\.[a-zA-Z]{1,6}$/;
const emailMessagetoUser=document.querySelectorAll('.useremail-message');

emailInput.forEach(email=>{ 
email.addEventListener('input',()=>{ 

if(email.value.trim()==="" || email.value.length===0){
    email.style.borderColor='red';
    email.style.outline='red';
    emailMessagetoUser.forEach(message=>{ 
    message.textContent='this field is required'
    message.style.color='red';

    })
}
else if(!emailPattern.test(email.value)){
    email.style.borderColor='red';
    email.style.outline='red';
    emailMessagetoUser.forEach(message=>{
    message.textContent='enter a valid email'
    message.style.color='red';
})

   // console.log(emailInput.value);
}
else{
    email.style.borderColor='green';
        email.style.outline='green';
        emailMessagetoUser.forEach(message=>{ 
        message.textContent="";
        })
}
})

})


const username=document.querySelectorAll('.nameinput');
const usernamePattern=/^[a-zA-Z0-9]+\s[a-zA-Z0-9]+(?:\s[a-zA-Z0-9]+)?\s?$/i;
const nameMessagetoUser=document.querySelectorAll('.user-message'); 

username.forEach(name=>{ 
name.addEventListener('input',()=>{
    if(name.value.trim()==="" || name.value.length===0){
        name.style.borderColor='red';
        name.style.outline='red';
        nameMessagetoUser.forEach(message=>{
            message.textContent='this field is required';
            message.style.color='red';
        })
        
    }
    else if(!usernamePattern.test(name.value)){
       name.style.borderColor='red';
       name.style.outline='red'; 
       nameMessagetoUser.forEach(message=>{
            message.textContent='enter valid name';
            message.style.color='red';
        })
    }
    else{
        name.style.borderColor='green';
        name.style.outline='green';
        nameMessagetoUser.forEach(message=>{
        message.textContent="";
    })
    }
})

}) 


const phoneNumberInput=document.querySelectorAll('.phonenumberinput');
const phoneNumberMessageToUser=document.querySelectorAll('.phone-message');
const phoneNumberPattern=/^\+?\(?\d{1,4}\)?[ -]?\(?\d{2,4}\)?[ -]?\d{3,4}[ -]?\d{3,4}$/

phoneNumberInput.forEach(number=>{
    number.addEventListener('input',()=>{
        if(number.value.trim()==="" || number.value.length===0){
            number.style.outline='red';
            number.style.borderColor='red';

            phoneNumberMessageToUser.forEach(message=>{
                message.textContent='this field is required';
                message.style.color='red';
            })
        }
            else if(!phoneNumberPattern.test(number.value)){
                number.style.borderColor='red';
                number.style.outline='red';

                phoneNumberMessageToUser.forEach(message=>{
                    message.textContent='enter a valid number';
                    message.style.color='red';
                })

            }
            else{
                number.style.outline='green';
                number.style.borderColor='green'
                phoneNumberMessageToUser.forEach(message=>{
                    message.textContent="";
                })
            }
    })
})



const selectCountry=document.querySelectorAll('.select-country');
const countrymessageToUser=document.querySelectorAll('.country-message');

selectCountry.forEach(country=>{
    country.addEventListener('change',()=>{ 
    if (country.value.trim()==="" || country.value.length===0) {
        country.style.outline='red';
        country.style.borderColor='red';

        countrymessageToUser.forEach(message=>{
            message.textContent='this field is required';
            message.style.color='red';
        })
    }
    else{
        country.style.outline='green';
        country.style.borderColor='green';

        countrymessageToUser.forEach(messagetoUser=>{
            messagetoUser.textContent="";
        })
    }
})
})



const companyWebsiteInput=document.querySelectorAll('.companywebsite');
const websiteMessagetoUser=document.querySelectorAll('.website-message');
const websitePattern=/^(https:?\/\/)?(www\.)?[a-zA-Z0-9]+\.[a-zA-Z0-9]{1,6}$/i;

companyWebsiteInput.forEach(website=>{
    website.addEventListener('input',()=>{  
    if(website.value.trim()==="" || website.value.length===0){
        website.style.outline='red';
        website.style.borderColor='red';

        websiteMessagetoUser.forEach(message=>{
            message.textContent='this field is required';
            message.style.color='red';
        })
    }
    else if(!websitePattern.test(website.value)){
        website.style.outline='red';
        website.style.borderColor='red';

        websiteMessagetoUser.forEach(message=>{
            message.textContent='enter valid website';
            message.style.color='red';
        })
    }
    else{
        website.style.borderColor='green';
        website.style.outline='green';

        websiteMessagetoUser.forEach(message=>{
            message.textContent="";
        })
    }

    })
})

const companySizeInput=document.querySelectorAll('.select-company-size');
const companySizeMessageToUser=document.querySelectorAll('.company-size-message');


companySizeInput.forEach(size=>{
    size.addEventListener('change',()=>{
        if(size.value==="" || size.value.length===0){
            size.style.outline='red';
            size.style.borderColor='red';

             companySizeMessageToUser.forEach(valueMessage=>{
                valueMessage.textContent='this field is required';
                valueMessage.style.color='red';
            })
        }
        else{
            size.style.outline='green';
            size.style.borderColor='green';
             companySizeMessageToUser.forEach(valueMessage=>{
                valueMessage.textContent=""
            })
        }
    })
})



const selectValueInput=document.querySelectorAll('.select-value');
const selectValueMessage=document.querySelectorAll('.value-message');


selectValueInput.forEach(values=>{
    values.addEventListener('change',()=>{
        if(values.value==="" || values.value.length===0){
            values.style.outline='red';
            values.style.borderColor='red';

            selectValueMessage.forEach(valueMessage=>{
                valueMessage.textContent='this field is required';
                valueMessage.style.color='red';
            })
        }
        else{
            values.style.outline='green';
            values.style.borderColor='green';
            selectValueMessage.forEach(valueMessage=>{
                valueMessage.textContent=""
            })
        }
    })
})




const privacyPolicySection=document.querySelectorAll('.input-boxes-privacy-hidden');
const formInputs=document.querySelectorAll('input');
const formSelect=document.querySelectorAll('select');

function privacyPolicyToggle() {
    formInputs.forEach(inputs=>{
        inputs.addEventListener('input',()=>{
            formSelect.forEach(selects=>{
                selects.addEventListener('change',()=>{
                    if(!inputs.value=="" && !selects.value==""){
                        privacyPolicySection.forEach(section=>{
                            section.style.display='inline-block';
                        })
                    }
                    else{
                        privacyPolicySection.forEach(section=>{
                            section.style.display='none';
                        })
                    }
                })
            })
        })
    })
}

privacyPolicyToggle();



