const Post = ({post, setPostDetails}) => {
    const {id, title} = {post}
    // console.log(user);
    return (
        <div>
            {post && <div>
                <div>id: {post.id}</div>
                <div>title: {post.title}</div>
                <button onClick={()=>setPostDetails (post)}>GetDetails</button>
                {/*<button onClick={()=>setUserDetails (user)}>GetDetails</button>*/}
            </div>}
        </div>
    );
};
export {Post};
