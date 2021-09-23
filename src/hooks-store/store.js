import {useState,useEffect} from 'react';

let globalState = {};
let listeners = [];
let actions = {};

export const useStore = (shouldListen=true, string="first invoke") => {
    const setState = useState(globalState)[1];

    const dispatch = (actionIdentifier, payload) => {
        const newState = actions[actionIdentifier](globalState, payload);
        globalState = {...globalState, ...newState};
        let i = 0;
        for (const listener of listeners){
            // console.log("for...", globalState['products'][i++].title); 
            console.log("for...", globalState['products']); 
            listener(globalState);
            // if (i>3){
            //     break;
            // }
        }
    };

    useEffect(()=>{
        if(shouldListen){
            listeners.push(setState);
            console.log("useEffect 1", string);
        }

        return () => {
            if(shouldListen){
                console.log(listeners.length,"clean up"); 
                listeners = listeners.filter( (li) => li !== setState);     
                console.log("clean up..."); 
              }
        };
    },[setState, shouldListen]);

    return [globalState, dispatch];
    
};

export const initStore = (userActions, initialState) => {
    if(initialState){
        globalState = {...globalState, ...initialState}
    }

    actions = {...actions, ...userActions};
};