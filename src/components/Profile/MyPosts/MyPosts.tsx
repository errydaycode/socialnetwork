import React from 'react';
import s from './Myposts.module.css'
import {Post} from "./Post/Post";
import {PostsPropsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/valitators/validators";
import {TextArea} from "../../common/FormsControls/FormsControls";


export type postsDataType = {
    id: number,
    message: string,
    likesCount: number
}

type FormDataType = {
    newPostText: string
}

// type MyPostsPropsType = {
//     posts: postsDataType[]
//     newPostText?: string
//     addPost: ()=> void
//     updateNewPostText: (text: string)=> void
// }
const maxLength10 = maxLengthCreator(10)

const MyPosts = React.memo((props: PostsPropsType) => {

    let mappedPosts = [...props.posts]
      .reverse()
      .map((post, index) =>
        <Post key={index} message={post.message} likesCount={post.likesCount}/>)

    let onAddPost = (values: FormDataType) => {
        debugger
        props.addPostHandler(values.newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <AddPostFormRedux onSubmit={onAddPost}/>
            </div>
            <div className={s.posts}>
                {mappedPosts}
            </div>
        </div>
    );
});


const AddPostForm : React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={TextArea}
                       name={'newPostText'}
                       placeholder={'Enter your post..'}
                       validate={[required, maxLength10]}

                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    </>
}
const AddPostFormRedux = reduxForm<FormDataType>({
    // a unique name for the form
    form: 'addPost'
})(AddPostForm)


export default MyPosts;