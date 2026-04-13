export type HeaderTextItem = {
    id: number;
    name: string;
    href: string;
};

export type LinkItem = {
    id: number;
    name: string;
    href: string;
};

export type SkillItem = {
    id: number;
    src: string;
    alt: string;
};


export type project = {
    id: number;
    title: string;
    image: string;
    desc: string;
    live: string;
    github: string;
};

export type ImageItem = {
  src: string;
  alt: string;
};

export type CardWorkItem = {
    id: number;
    image: string;  
    title: string;
    description: string;
};


export type FormField = {
    id: number;
    name: string;
    type?: string;
    placeholder: string;
    as: "input" | "textarea";
    rows?: number;
};









