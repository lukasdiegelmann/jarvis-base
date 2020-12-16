interface WorkspaceConfig {
    eslintConfig: object;
    webpackConfig: {
        cache: {
            process_panel_id?: number;
        };
        options: {
            cwd: string;
            env: string;
            shouldExecute: boolean;
            isDevelopment: boolean;
        };
        settings: object;
    }[];
}

export type CLI = (...process_args: string[]) => void;

interface Escape {
    accessor: string;
    value: string;
    pos: [number, number];
}

export type TemplateReplacer = (templatedString: string) => Escape[];

export type AccessorValueHandler = (escape: Escape) => RegExp | Function | string;

export type Transpiler = (obj: {}) => {
    workspace_config?: WorkspaceConfig;
    [key: string]: unknown;
};

interface CLIOptions {
    project: string;
    directory: string;
    compilation_mode: string;
    options_override: object;
}

type ParseFlagString = (key: string, process_args: string[]) => string | null;

type GetCLIOptions = (cwd: string, process_args: string[]) => CLIOptions;

export type CreateTerminal = (
    project: object,
    transpiled: {
        workspace_config?: WorkspaceConfig;
        [key: string]: unknown;
    }
) => {
    createProcessPanel: (webpackConfigID: number) => void;
    startProgressAnimation: (webpackConfigID: number) => () => void;
    setProcessPanelHeader: (
        webpackConfigID: number,
        options: {
            event_name: string;
            file_path: string;
            compilation_stats: {};
            compilation_time: number;
        }
    ) => void;
    logToProcessPanel: (
        webpackConfigID: number,
        options: {
            toWrite: string;
        }
    ) => void;
    clearProcessPanel: (webpackConfigID: number) => void;
};
