import * as Sentry from '@sentry/browser'

import { ENV, SENTRY_DNS } from '../config'

export const init = () => {
    Sentry.init({
        dsn: SENTRY_DNS,
        environment: ENV
    });
}

export const onComponentError = (error, errorInfo) => {
    Sentry.withScope(scope => {
        Object.keys(errorInfo).forEach(key => {
          scope.setExtra(key, errorInfo[key]);
        });
        Sentry.captureException(error);
      });
}

export const reportError = Sentry.showReportDialog