import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'applications',
        title    : 'Applications',
        translate: 'NAV.APPLICATIONS',
        type     : 'group',
        children : [
            {
                id       : 'covid',
                title    : 'Covid',
                translate: 'NAV.covid.TITLE',
                type     : 'item',
                icon     : 'email',
                url      : '/covid',

            }
        ]
    }
];
