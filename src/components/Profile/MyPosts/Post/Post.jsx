
import React from "react";
import s from "./Post.module.css"

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4a7e0b9d-26a5-4d59-b0e9-4ca9f3724ff2/d1a9sqq-032081c7-2c67-4b75-b942-8da8979c9bea.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRhN2UwYjlkLTI2YTUtNGQ1OS1iMGU5LTRjYTlmMzcyNGZmMlwvZDFhOXNxcS0wMzIwODFjNy0yYzY3LTRiNzUtYjk0Mi04ZGE4OTc5YzliZWEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.RMRB5aQTt9BYf0tvOIBdIOpS_kN8aC9sZrA0o-eIJBo" alt="Avatar" />
            {props.message}
            <div>
                <span>{"Like - " + props.like}</span>
            </div>

        </div>
    )
}

export default Post;