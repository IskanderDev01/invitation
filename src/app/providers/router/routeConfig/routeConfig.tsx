import { WeddingInvitation } from '@/pages/MainPage/ui/MainPage'
import { NotFoundPage } from '@/pages/NotFoundPage/ui'
import { AppRoutesProps } from '@/shared/types/router'

export enum AppRoutes {
    MAIN = 'main',
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <WeddingInvitation />,
        text: 'Главная'
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
