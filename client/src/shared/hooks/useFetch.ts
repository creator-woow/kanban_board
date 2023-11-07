import { Reducer, useEffect, useReducer } from 'react';
import { HTTP } from 'shared/lib/httpClient';

export enum FetchStatus {
  Pending = 'PENDING',
  Error = 'ERROR',
  Success = 'SUCCESS',
  None = 'NONE',
  Default = None
}

enum FetchAction {
  Load = 'LOAD',
  Success = 'SUCCESS',
  Error = 'ERROR'
}

interface ILoadAction {
  type: FetchAction.Load;
}

interface ISuccessAction<TResult> {
  type: FetchAction.Success;
  upload: TResult;
}

interface IErrorAction {
  type: FetchAction.Error;
  upload: Error;
}

interface IFetchState<TData> {
  status: FetchStatus;
  data?: TData;
}

type TFetchAction<TData> = ILoadAction | ISuccessAction<TData> | IErrorAction;
type TFetchReducer<TData> = Reducer<IFetchState<TData>, TFetchAction<TData>>

function stateReducer<TData> (
  state: IFetchState<TData>,
  action: TFetchAction<TData>
): IFetchState<TData> {
  switch(action.type) {
    case FetchAction.Load:
      return { ...state, status: FetchStatus.Pending }
    case FetchAction.Success:
      return { ...state, status: FetchStatus.Success, data: action.upload }
    default:
      return state
  }
}

export const useFetch = <TResult>(url: string): IFetchState<TResult> => {
  const [state, dispatch] = useReducer<TFetchReducer<TResult>>(
    stateReducer,
    { status: FetchStatus.Default }
  );

  useEffect(() => {
    dispatch({ type: FetchAction.Load });
    const controller = new AbortController();
    HTTP.get<TResult>(url, { signal: controller.signal })
      .then((data) => {
        if (!controller.signal.aborted) {
          dispatch({ type: FetchAction.Success, upload: data })
        }
      })
      .catch((error) => dispatch({ type: FetchAction.Error, upload: error }))

    return () => controller.abort();
  }, [url]);

 return state;
}
