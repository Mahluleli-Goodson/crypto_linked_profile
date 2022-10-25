export enum NavMenuEnum {
    HOME = "Home",
    TEST = "Test",
    CRYPTO = "Crypto",
    DOC = "API Doc",
}

interface INavMenu {
    title: NavMenuEnum;
    link: string;
}

export const menus: INavMenu[] = [
    {title: NavMenuEnum.HOME, link: "/"},
    {title: NavMenuEnum.TEST, link: "/test"},
    {title: NavMenuEnum.CRYPTO, link: "/crypto"},
    {title: NavMenuEnum.DOC, link: "/doc"},
];
