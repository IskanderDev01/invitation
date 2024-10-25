import { DownloadPage } from '@/pages/DownLoadPage/DownloadPage';
import { WeddingInvitation } from '@/pages/MainPage/ui/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage/ui';
import { AppRoutesProps } from '@/shared/types/router';

export enum AppRoutes {
    MAIN = 'main',
    DOWNLOAD = 'download',
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.DOWNLOAD]: '/download',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <WeddingInvitation />,
    },
    [AppRoutes.DOWNLOAD]: {
        path: RoutePath.download,
        element: <DownloadPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
