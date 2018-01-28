import { OnInit } from '@angular/core';
import { NavigationItemConfig } from './navigation-item-config';
export declare class ApplicationLauncherComponent implements OnInit {
    /**
     *  Use a custom label for the launcher, default: Application Launcher
     */
    label: string;
    /**
     * Disable the application launcher button, default: false
     */
    isDisabled: boolean;
    /**
     * Display items as a list instead of a grid, default: false
     */
    isList: boolean;
    /**
     * Flag to not show icons on the launcher, default: false
     */
    hiddenIcons: boolean;
    /**
     * The navigation items used to build the menu
     */
    items: NavigationItemConfig[];
    /**
     * Internal boolean to toggle launcher, default:false
     */
    isClicked: boolean;
    /**
     * The default constructor
     */
    constructor();
    /**
     * Initialize variable
     */
    ngOnInit(): void;
    /**
     * toggle function for launcher, active when click, return false on isDisabled:true
     */
    toggle(): boolean;
}
