// fichier où vous définissez Links
import { BsEnvelope } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import { LuMapPin } from "react-icons/lu";
import { CiInstagram, CiTwitter, CiLinkedin, CiFacebook } from 'react-icons/ci';
import type { FooterLink} from '@/types';

export const NavbarLinksLocal= [
  {
      title: "Nos Liens",
      links: [
        { title: "Nos Projets", url: "/" },
        { title: "Investir", url: "/" },
        { title: "Habiter", url: "/" },
        { title: "Louer", url: "/" },
        { title: "Vendre Son Terrain", url: "/" },
        { title: "Contact", url: "/" },

      ],
    },
  ]

export const footerLinks: FooterLink[] = [
  {
    title: "Nos agences",
    links: [
      { icone: LuMapPin, title: "198 logements, Ouled Fayet, Cheraga, Alger", url: "/" },
    ],
  },
 
  {
    title: "Contactez-nous",
    links: [
      { icone: FiPhone, title: "+213-553-22-58-01", url: "/" },
      { icone: BsEnvelope, title: "Contact@immobilier.com", url: "/" },
    ],
  },

];

export const footerLinksSocial: FooterLink[] = [
{
    title: "Suivez-nous :",
    links: [
      { title: "instagram", icone: CiInstagram, url: "/" },
      { title: "facebook", icone: CiFacebook, url: "/" },
      { title: "twiter", icone: CiTwitter, url: "/" },
      { title: "linkedin", icone: CiLinkedin, url: "/" },
    ],
  }
]
export const footerLinksLocal: FooterLink[] = [
    {
        title: "Nos localités",
        links: [
          { title: "Kouba", url: "/" },
          { title: "Bouzaria", url: "/" },
          { title: "Hydra", url: "/" },
          { title: "Dar El Bida", url: "/" },
        ],
      },
    ]
