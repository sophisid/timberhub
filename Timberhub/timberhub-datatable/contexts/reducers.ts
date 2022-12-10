type ActionMap<M extends { [index: string]: any }> = {
    [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
    }
    : {
        type: Key;
        payload: M[Key];
    }
};

export enum Types {
    Change = "CHANGE_TOOL"
}

// Tool Name

/**
 * Types of payloads with their respective contents
 */
type ToolNamePayload = {
    [Types.Change]: {
        name: string;
    };
};

/**
 * All available actions for toolName
 */
export type ToolNameActions = ActionMap<ToolNamePayload>[keyof ActionMap<
    ToolNamePayload
>];

/**
 * Handling incoming dispatches (reducer ToolNameActions)
 */
export const toolNameReducer = (
    state: string,
    action: ToolNameActions
) => {
    switch (action.type) {
        case Types.Change:
            return state = action.payload.name;
        default:
            return state;
    }
};

