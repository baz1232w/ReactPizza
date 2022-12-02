import {RootState} from "../redux/redux-store";
import {useSelector, TypedUseSelectorHook, useDispatch} from "react-redux";
import ActionCreators from "../types/allActionCreators";
import {bindActionCreators} from "redux";

export const useTypedSelector:TypedUseSelectorHook<RootState> = useSelector
export const useAction = () =>{
    const dispatch = useDispatch()
    return bindActionCreators(ActionCreators,dispatch)
}