import React from "react";
import Context from "./Context";
//WithContext takes the React Component as its parameter, 
//then returns the function that takes the compoennts props as a perameter
const withContext = WrappedComponent => {
    const WithHOC = props => {
        return (
            // ...props ensures tha the component retains any props that were passed to it originally.
            <Context.Consumer>
                {context => <WrappedComponent {...props} context={context} />}
            </Context.Consumer>
        );
    };
    return WithHOC;
};

export default withContext;