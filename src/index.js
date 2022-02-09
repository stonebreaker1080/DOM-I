const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')


const aTags = Array.from(document.querySelectorAll('nav a'))
for (let i = 0 ; i < aTags.length ; i++) {
  aTags[i].textContent = siteContent.nav[`nav-item-${i+1}`]
  aTags[i].classList.add("italic")
}

const ctaH1 = document.querySelector('section .cta-text h1')
ctaH1.textContent = siteContent.cta.h1

const ctaButton = document.querySelector('section .cta-text button')
ctaButton.textContent = siteContent.cta.button

const logoImg = document.querySelector('#logo-img')
logoImg.setAttribute("src", siteContent.images["logo-img"])

const ctaImg = document.querySelector("#cta-img")
ctaImg.setAttribute("src", siteContent.images["cta-img"])

const featuresContent = document.querySelector(".main-content .top-content .text-content")

const featuresH4 = featuresContent.querySelector("h4")
const featuresP = featuresContent.querySelector("p")
featuresH4.textContent = siteContent["main-content"]["features-h4"]
featuresP.textContent = siteContent["main-content"]["features-content"]

const aboutContent = featuresContent.nextElementSibling
const aboutH4 = aboutContent.querySelector("h4")
const aboutP = aboutContent.querySelector("p")
aboutH4.textContent = siteContent["main-content"]["about-h4"]
aboutP.textContent = siteContent["main-content"]["about-content"]

const middleImg = document.querySelector("#middle-img")
middleImg.setAttribute("src", siteContent.images["accent-img"])

const servicesContent = document.querySelector(".bottom-content .text-content")
const servicesH4 = servicesContent.querySelector("h4")
const servicesP = servicesContent.querySelector("p")
servicesH4.textContent = siteContent["main-content"]["services-h4"]
servicesP.textContent = siteContent["main-content"]["services-content"]

const productContent = servicesContent.nextElementSibling
const productH4 = productContent.querySelector("h4")
const productP = productContent.querySelector("p")
productH4.textContent = siteContent["main-content"]["product-h4"]
productP.textContent = siteContent["main-content"]["product-content"]

const visionContent = productContent.nextElementSibling
const visionH4 = visionContent.querySelector("h4")
const visionP = visionContent.querySelector("p")
visionH4.textContent = siteContent["main-content"]["vision-h4"]
visionP.textContent = siteContent["main-content"]["vision-content"]

const contact = document.querySelector(".contact")
const contactH4 = contact.querySelector("h4")
contactH4.textContent = siteContent.contact["contact-h4"]

const contactAddress = contactH4.nextElementSibling
const contactPhone = contactAddress.nextElementSibling
const contactEmail = contactPhone.nextElementSibling

contactAddress.textContent = siteContent.contact.address
contactPhone.textContent = siteContent.contact.phone
contactEmail.textContent = siteContent.contact.email

const footerContent = document.querySelector("footer a")

footerContent.textContent = siteContent.footer.copyright
footerContent.classList.add("bold")
