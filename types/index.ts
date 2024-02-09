import { MouseEventHandler } from "react";
import { IconType } from 'react-icons';
/*définir un contrat que les composants doivent suivre(les propriétés)*/

export interface CustomButtonProps{
    title:string;
    containerStyles?:string;
    handleClick?:/*PARFOIS SERA UN BUTTON SUBMIT DONT ON AURA PAS BESOIN DE HANDLECLICK*/
    MouseEventHandler<HTMLButtonElement>;
    btnType:"button" | "submit";
}

export interface FooterLinkItem {
  title: string;
  url: string;
  icone?: IconType;
}

export interface FooterLink {
  title: string;
  links: FooterLinkItem[];
  icon?: IconType;
}
