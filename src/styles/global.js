import { createGlobalStyle } from 'styled-components'


const GlobalStyles = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
  font: 400 14px Roboto, sans-serif;
   
  background: var(--bodyColor);
  -webkit-font-smoothing: antialiased;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
input, buttun, textarea {
  font: 400 18px Roboto, sans-serif;
}
button {
  cursor: pointer;
}
form input {
  width: 100%;
  height: 60px;
  color: #3333;
  border: 1px solid #dcdce6;
  border-radius: 8px;
  padding: 0 24px;
}
form textarea {
  width: 100%;
  resize: vertical;
  min-height: 140px;
  height: 60px;
  color: #3333;
  border: 1px solid #dcdce6;
  border-radius: 8px;
  padding: 16px 24px;
  line-height: 24px;
}

body.light {
  --red:#2B7A78;
--redLight:#3AAFA9;
--lightDark: #1A1A1D;
--lightGray: #747474;
--darkGray:#4e4e50;
--lightRed:#5D001E;
--lightWhite:#DEF2F1;
--dark:#17252A;
--boxShadow02: rgba(43, 122, 120, 0.2);
--boxShadow04: rgba(43, 122, 120, 0.4);


--bodyColor: var(--lightWhite);

--titleComment: var(--lightRed);

--menuBarBackground: var(--redLight);
--menuBarBorderleft: var(--redLight);
--menuBarBoxShadow: var(--red);
--menuBarItem: var(--dark);
--hoverMenuBarItem: var(--red);

--menuLinkColor: var(--red);
--menuLinkActive: var(--lightDark);

--paginationBorder:var(--redLight);
--paginationColor: var(--red);
--paginationLinkColor: var(--redLight);
--paginationLinkHover: var(--red);

--postHeaderColor: var(--red);
--postTitleColor:var(--redLight);
--postDescription: var(--lightDark);
--postDate: var(--red);

--postItemLink:var(--red);
--postItemLinkHover: var(--red);
--postItemLinkBorder: var(--darkGray);
--postItemLinkBorderHover: var(--red);
--postItemLinkBoxShadow: var(--boxShadow02);
--postItemLinkTag: var(--red);

--profileLinkColor: var(--red);
--profileLinkColorHover: var(--redLight);
--profileWrapper: var(--lightDark);

--postMainContentDescription: var(--lightGray);

--recommendedLinkColor: var(--redLight);
--recommendedLinkBorderColor:var(--redLight);
--recommendedLinkHoverColor: var(--red);
--recommendedLinkHoverBackground: var(--redLight);

--searchColor: var(--red);
--searchBorder: var(--red);

--sideBarBoxShadow: var(--red);
--sideBarBorder: var(--red);
--sideBarBackground: var(--lightWhite);

--socialLinksColor: var(--red);
--socialLinksColorHover: var(--redLight);

}

body.dark {

--dark: #1A1A1D;
--ultraDark:#19191a;
--red:#950740;
--redLight:#c3073f;
--redFaint:#6F2232;
--white:#feffff;
--gray:#c5c6c7;
--darkGray:#4e4e50;
--blueDark: #8899a6;
--boxShadow02: rgba(195, 7, 63, 0.2);
--boxShadow04: rgba(195, 7, 63, 0.4);

--bodyColor: var(--dark);

--titleComment: var(--white);

--menuBarBackground: var(--ultraDark);
--menuBarBorderleft: var(--redLight);
--menuBarBoxShadow: var(--boxShadow04);
--menuBarItem: var(--gray);
--hoverMenuBarItem: var(--red);

--menuLinkColor: var(--gray);
--menuLinkActive: var(--redLight);

--paginationBorder:var(--redLight);
--paginationColor: var(--gray);
--paginationLinkColor: var(--redLight);
--paginationLinkHover: var(--red);

--postHeaderColor: var(--white);
--postTitleColor:var(--redLight);
--postDescription: var(--darkGray);
--postDate: var(--red);

--postItemLink:var(--gray);
--postItemLinkHover: var(--red);
--postItemLinkBorder: var(--darkGray);
--postItemLinkBorderHover: var(--gray);
--postItemLinkBoxShadow: var(--boxShadow02);
--postItemLinkTag: var(--white);

--profileLinkColor: var(--white);
--profileLinkColorHover: var(--red);

--profileWrapper: var(--white);


--postMainContentDescription: var(--gray);

--recommendedLinkColor: var(--redLight);
--recommendedLinkBorderColor:var(--redLight);
--recommendedLinkHoverColor: var(--gray);
--recommendedLinkHoverBackground: var(--redLight);

--searchColor: var(--gray);
--searchBorder: var(--gray);

--sideBarBoxShadow: var(--boxShadow02);
--sideBarBorder: var(--redLight);
--sideBarBackground: var(--ultraDark);

--socialLinksColor: var(--gray);
--socialLinksColorHover: var(--redLight);
}

`



export default GlobalStyles;