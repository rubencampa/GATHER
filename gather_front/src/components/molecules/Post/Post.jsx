import './post.css'
import Pfp from '../../../resources/img/user_img.png'

const Post = (postData) => {
    // console.log(postData.postData);
    // console.log(postData.postData.userid);
    return (
    <>
    <div className="div-post">
            <div className="header-post p-3">
              <h5>{postData.postData.titulo}</h5>
              <div className="post-user">
                <img className='img-fluid' src={Pfp} alt="" />
                <p>{postData.postData.userid.username}</p>
              </div>
            </div>
            <div className="main-post my-auto mx-auto">
              {postData.postData.tipoPost == 1 ? 
              postData.postData.contenido
              :
              <img className='img-fluid' src={postData.postData.rutaImgPost} alt="" />}
            </div>
            <div className="footer-post py-3 px-5">
                
            </div>
    </div>
    </>
    )

}

export default Post