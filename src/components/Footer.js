import React from 'react';
export const Footer =(props)=> {
    return (
        <div>
            <h4 className="bg-warning text-center">
            Copyright Reserved to Arvind {props.year}
            </h4>
        </div>
    );
}