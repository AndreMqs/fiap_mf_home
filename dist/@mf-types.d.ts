
    export type RemoteKeys = 'REMOTE_ALIAS_IDENTIFIER/HomePage';
    type PackageType<T> = T extends 'REMOTE_ALIAS_IDENTIFIER/HomePage' ? typeof import('REMOTE_ALIAS_IDENTIFIER/HomePage') :any;