import React, { useState } from "react";
import './commentbox.css';

const CommentBox = (props) => {
    return (
        <div className="cmtbox-container">
            <div>
                <span className="cmtname">Comment</span>
            </div>
            <div>
                <textarea
                    name="commentbox"
                    id="cmt-bx"
                    cols="120"
                    rows="5"
                ></textarea>
            </div>
            <div>
                <button className="addcmt-btn blue">AddComment</button>      
            </div>
        </div>
    );
};

export default CommentBox;
