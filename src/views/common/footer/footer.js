const footer = document.querySelector('footer');

const footerLogo = document.createElement('div');
const logoLink = document.createElement('a');
const logoImgFooter = document.createElement('img');
const copyRight = document.createElement('p');

footerLogo.classList.add('footerLogo');
logoLink.setAttribute('href', 'https://github.com/book-cord/book-cord');
logoLink.setAttribute('target', '_blank');
logoImgFooter.classList.add('footerLogoImage');
logoImgFooter.setAttribute('src', '../images/logo.png');
logoImgFooter.setAttribute('alt', '북코드 로고 이미지');
copyRight.classList.add('footerCopyRight');
copyRight.textContent = 'ⓒ 2022 UnIMooN Corp. all rights reserved.';
logoLink.append(logoImgFooter);
footerLogo.append(logoLink, copyRight);

const footerLinks = document.createElement('ul');
footerLinks.classList.add('footerLinks');

const footerListH = document.createElement('li');
const footerLinkH = document.createElement('a');
const footerButtonH = document.createElement('button');
const footerIconH = document.createElement('i');
const footerNameH = document.createElement('strong');

footerLinkH.href = 'https://github.com/Jinnie-kim';
footerLinkH.setAttribute('target', '_blank');
footerButtonH.classList.add('footerButton');
footerButtonH.classList.add('gitHijin');
footerIconH.setAttribute('class', 'fa-brands fa-github');
footerNameH.classList.add('footerButtonName');
footerNameH.textContent = '희진';

footerButtonH.append(footerIconH, footerNameH);
footerLinkH.append(footerButtonH);
footerListH.append(footerLinkH);

const footerListS = document.createElement('li');
const footerLinkS = document.createElement('a');
const footerButtonS = document.createElement('button');
const footerIconS = document.createElement('i');
const footerNameS = document.createElement('strong');

footerLinkS.href = 'https://github.com/sojeongsojeong-park';
footerLinkS.setAttribute('target', '_blank');
footerButtonS.classList.add('footerButton');
footerButtonS.classList.add('gitSojeong');
footerIconS.setAttribute('class', 'fa-brands fa-github');
footerNameS.classList.add('footerButtonName');
footerNameS.textContent = '소정';

footerButtonS.append(footerIconS, footerNameS);
footerLinkS.append(footerButtonS);
footerListS.append(footerLinkS);

footerLinks.append(footerListH, footerListS);

footer.append(footerLogo, footerLinks);